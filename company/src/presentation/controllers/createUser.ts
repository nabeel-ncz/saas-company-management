import { IDependencies } from "@/application/interfaces/IDependencies";
import { employeeCreated } from "@/infrastructure/messages/kafka/producers";
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

            if(value.role === "admin" || value.role === "owner") {
                throw new ValidationError("User role can't be admin and owner");
            }

            const result = await createUserUseCase(dependencies).execute({
                ...value,
            });
            
            // employee created message produce
            await employeeCreated(result);

            res.status(201).json({
                data: result,
                message: 'user created'
            });
        } catch (error) {
            next(error);
        }

    }
}