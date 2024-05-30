import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getCompaniesController = (dependencies: IDependencies) => {

    const {
        useCases: { getCompaniesUseCase },
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await getCompaniesUseCase(dependencies).execute({
                ownerId: Number(req.user.id)
            });
            res.status(200).json({
                data: result,
                message: 'companies retrieved'
            });
        } catch (error) {
            next(error);
        }

    }
}