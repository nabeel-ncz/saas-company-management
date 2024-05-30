import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const updateUserController = (dependencies: IDependencies) => {

    const {
        useCases: { updateUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            if(!req.body.id) {
                throw new ValidationError("employee id is required");
            }
            const result = await updateUserUseCase(dependencies).execute({
                ...req.body
            });
            res.status(200).json({
                data: result,
                message: 'user updated'
            });
        } catch (error) {
            next(error);
        }

    }
}