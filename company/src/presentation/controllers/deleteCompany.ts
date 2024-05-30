import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const deleteCompanyController = (dependencies: IDependencies) => {

    const {
        useCases: { deleteCompanyUseCase },
        utilities: {
            deleteCompanyValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = deleteCompanyValidation.validate(req.body);
            if(error) {
                throw new ValidationError(error?.message);
            }
            await deleteCompanyUseCase(dependencies).execute(value);
            res.status(204).json({});
        } catch (error) {
            next(error);
        }
        
    }
}