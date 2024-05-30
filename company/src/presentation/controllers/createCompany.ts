import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const createCompanyController = (dependencies: IDependencies) => {

    const {
        useCases: { createCompanyUseCase },
        utilities: {
            createCompanyValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = createCompanyValidation.validate(req.body);
            if(error) {
                throw new ValidationError(error?.message);
            }
            const result = await createCompanyUseCase(dependencies).execute(value);
            res.status(201).json({
                data: result,
                message: 'company created'
            });
        } catch (error) {
            next(error);
        }

    }
}