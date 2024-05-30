import { IDependencies } from "@/application/interfaces/IDependencies";
import { BadRequestError } from "@company-management/common";
import { Request, Response, NextFunction } from "express";

export const getUserController = (dependencies: IDependencies) => {
    const {
        useCases: { getUserByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.user.id;
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