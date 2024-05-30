import jwt from "jsonwebtoken";

export const generateAccessToken = (
    payload: {
        id: string,
        email: string
    }
) => {
    return jwt.sign(
        payload,
        String(process.env.ACCESS_TOKEN_SECRET),
        { expiresIn: '1h' }
    );
};