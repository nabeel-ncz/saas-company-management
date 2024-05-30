import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const logoutController = (dependencies: IDependencies) => {

    const { } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie('access_token');
            res.clearCookie('refresh_token');
            res.status(200).json({ message: 'User logged-out successfully'});
        } catch (error) {
            next(error);
        }
    }
}