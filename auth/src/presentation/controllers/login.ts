import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const loginController = (dependencies: IDependencies) => {

    const {
        useCases: { loginUserUseCase },
        utilities: {
            generateAccessToken,
            generateRefreshToken,
            loginValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = loginValidation.validate(req.body);
            if (error) {
                return next(new ValidationError(error.message));
            }

            const result = await loginUserUseCase(dependencies)
                .execute({ email: value.email, password: value.password });

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
                message: 'User logged-in!'
            });
        } catch (error) {
            next(error);
        }
    }
}