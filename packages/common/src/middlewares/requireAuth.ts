import { Request, Response, NextFunction } from "express";
import { generateAccessToken, verifyToken } from "../utils/jwt";
import { UnAuthorizedError } from "../errors";

interface UserPayload {
    _id: string;
    email: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload
        }
    }
}

export const CurrentUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        const { access_token, refresh_token } = req.cookies;

        let user;

        if (access_token) {
            user = await verifyToken(
                access_token,
                String(process.env.ACCESS_TOKEN_SECRET)
            );
        }

        if (!user && refresh_token) {
            user = await verifyToken(
                refresh_token,
                String(process.env.REFRESH_TOKEN_SECRET)
            );

            if (user) {
                const newAccessToken = generateAccessToken(user);
                res.cookie("access_token", newAccessToken, {
                    httpOnly: true,
                });
            }
        }

        if(!user) {
            next(new UnAuthorizedError());
        }

        req.user = user!;
        next();

    } catch (error) {
        next(new UnAuthorizedError());
    }
}