import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const deleteUserController = (dependencies: IDependencies) => {

    const {
        useCases: { deleteUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            if(!req.body.id) {
                throw new ValidationError("employee id is required");
            }
            const userId = Number(req.body.id);
            await deleteUserUseCase(dependencies).execute(userId);
            res.status(204).json({});
        } catch (error) {
            next(error);
        }

    }
}