import * as jwt from "jsonwebtoken";

export const generateRefreshToken = (
    payload: {
        id: number,
        email: string
    }
) => {
    return jwt.sign(
        payload,
        String(process.env.REFRESH_TOKEN_SECRET),
        { expiresIn: '30d' }
    );
};