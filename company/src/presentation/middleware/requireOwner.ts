import { findUserById } from "@/infrastructure/database/postgres/repositories";
import { ForbiddenError, UnAuthorizedError } from "@company-management/common";
import { NextFunction, Request, Response } from "express";

export enum UserRole {
    ADMIN = "admin",
    OWNER = "owner",
    CLIENT = "client",
    OPS = "ops",
    INTERNAL = "internal"
}

export const requireOwner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if(!req.user.id) {
            throw new UnAuthorizedError();
        }
        const user = await findUserById(Number(req.user.id));
        if(user.role !== UserRole.OWNER) {
            if(user.role !== UserRole.ADMIN) {
                throw new ForbiddenError();
            }
        }
        next();
    } catch (error) {
        next(error);
    }
}