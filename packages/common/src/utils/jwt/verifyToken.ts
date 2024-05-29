import jwt from "jsonwebtoken";
import { UserPayload } from "../../middlewares/currentUser";

export const verifyToken = (token: string, secret: string): Promise<UserPayload | null> => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded as UserPayload);
            }
        });
    });
};