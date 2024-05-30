import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const updateCompanyController = (dependencies: IDependencies) => {

    const {
        useCases: { updateCompanyUseCase },
        utilities: {
            updateCompanyValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = updateCompanyValidation.validate(req.body);
            if(error) {
                throw new ValidationError(error?.message);
            }

            const result = await updateCompanyUseCase(dependencies).execute(value);
            
            res.status(200).json({
                data: result,
                message: 'company updated'
            });
        
        } catch (error) {
            next(error);
        }
        
    }
}