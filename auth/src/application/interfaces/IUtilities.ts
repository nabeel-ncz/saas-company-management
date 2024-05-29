import * as joi from "joi"

export interface IUtilities {
    //jwt utils
    generateAccessToken: (payload: {
        id: number,
        email: string
    }) => string;
    generateRefreshToken: (payload: {
        id: number,
        email: string
    }) => string;

    //bcrypt utils
    hashPassword: (password: string) => Promise<string | Error | null>;
    comparePassword: (data: { original: string, encrypted: string }) => Promise<boolean | Error>;

    //validation
    signupValidation: joi.ObjectSchema<any>

    // otp
    generateVerificationOTP: () => string;
}