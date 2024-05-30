import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (err instanceof CustomError) {
        return res.status(err.code).json({
            error: err.message
        });
    }
    
    res.status(500).json({
        message: err?.message || 'Something went wrong'
    });
    
};