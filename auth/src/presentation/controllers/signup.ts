import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const signupController = (dependencies: IDependencies) => {

    const {
        useCases: { createUserUseCase },
        utilities: {
            generateAccessToken,
            generateRefreshToken,
            hashPassword,
            signupValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = signupValidation.validate(req.body);
            if (error) {
                throw new Error(error.message);
            }

            value.password = await hashPassword(value.password);
            value['role']='user'; // Testing purpose

            const result = await createUserUseCase(dependencies).execute(value);

            if (!result) {
                throw new Error("User creation failed!");
            }

            //produce-user-created-message
            // await userCreatedProducer(result);
            //==============================

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

            res.status(200).json({ data: result });

        } catch (error) {
            next(error);
        }
    }
}