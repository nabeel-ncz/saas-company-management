import { IDependencies } from "@/application/interfaces/IDependencies";
import { emailVerificationProducer, userCreatedProducer } from "@/infrastructure/messages/kafka/producer";
import { redisClient } from "@/infrastructure/redis";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const signupController = (dependencies: IDependencies) => {

    const {
        useCases: { createUserUseCase },
        utilities: {
            generateAccessToken,
            generateRefreshToken,
            hashPassword,
            generateVerificationOTP,
            signupValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = signupValidation.validate(req.body);
            if (error) {
                return next(new ValidationError(error.message));
            }

            value.password = await hashPassword(value.password);
            
            if(!value.otp) {
                const otp = generateVerificationOTP();
                // produce message to notification service
                await emailVerificationProducer({
                    email: value.email,
                    otp: otp
                });
                // stored on redis for 5mins
                await redisClient.setex(`otp:${value.email}`, 300, otp);
                // sent otp sent success message
                return res.status(200).json({
                    data: {},
                    message: 'OTP successfully sent'
                });
            }

            // check the otp is valid or not
            const storedOtp = await redisClient.get(`otp:${value.email}`);
            if(!storedOtp || storedOtp !== value.otp) {
                return next(new ValidationError('OTP is invalid, Please try again!'));
            }
            
            // email is verified - now store the user data
            const result = await createUserUseCase(dependencies).execute(value);
            if (!result) {
                throw new Error("User creation failed!");
            }

            // produce user created message - user service
            await userCreatedProducer(result);

            const accessToken = generateAccessToken({
                id: result?.id,
                email: result?.email
            });
            const refreshToken = generateRefreshToken({
                id: result?.id,
                email: result?.email
            });
            
            res.cookie("access_token", accessToken, {
                httpOnly: true
            });
            res.cookie("refresh_token", refreshToken, {
                httpOnly: true
            });

            res.status(201).json({ 
                data: result,  
                message: 'User created!'
            });

        } catch (error) {
            next(error);
        }
    }
}