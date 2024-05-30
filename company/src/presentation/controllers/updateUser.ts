import { IDependencies } from "@/application/interfaces/IDependencies";
import { employeeUpdated } from "@/infrastructure/messages/kafka/producers";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const updateUserController = (dependencies: IDependencies) => {

    const {
        useCases: { updateUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            if (!req.body.id) {
                throw new ValidationError("employee id is required");
            }
            const result = await updateUserUseCase(dependencies).execute({
                ...req.body
            });

            //employee updated message
            await employeeUpdated(result);

            res.status(200).json({
                data: result,
                message: 'user updated'
            });
        } catch (error) {
            next(error);
        }

    }
}