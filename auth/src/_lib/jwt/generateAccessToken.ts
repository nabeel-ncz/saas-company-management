import * as jwt from "jsonwebtoken";

export const generateAccessToken = (
    payload: {
        id: number,
        email: string
    }
) => {
    return jwt.sign(
        payload,
        String(process.env.ACCESS_TOKEN_SECRET),
        { expiresIn: '1h' }
    );
};