import { IDependencies } from "@/application/interfaces/IDependencies";
import { ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const createUserController = (dependencies: IDependencies) => {

    const {
        useCases: { createUserUseCase, getCompanyByIdUseCase },
        utilities: {
            createUserValidation
        }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const { value, error } = createUserValidation.validate(req.body);
            if (error) {
                throw new ValidationError(error?.message);
            }
            const isCompanyExist = await getCompanyByIdUseCase(dependencies).execute(value.companyId);
            if(!isCompanyExist) {
                throw new ValidationError("company doesn't exist");
            }

            const result = await createUserUseCase(dependencies).execute({
                ...value,
            });
            
            res.status(201).json({
                data: result,
                message: 'user created'
            });
        } catch (error) {
            next(error);
        }

    }
}