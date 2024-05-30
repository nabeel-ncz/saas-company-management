import { IDependencies } from "@/application/interfaces/IDependencies";
import { BadRequestError, ValidationError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const getUserController = (dependencies: IDependencies) => {
    const {
        useCases: { getUserByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const id = req.params.id as string;
            if(id) {
                throw new ValidationError("User Id is required!");
            }
            const data = await getUserByIdUseCase(dependencies).execute(Number(id));
            if(!data) {
                throw new BadRequestError("User doesn't exist")
            }
            res.status(200).json({
                data
            })
        } catch (error) {
            next(error);
        }
    }
}