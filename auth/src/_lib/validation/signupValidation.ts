import * as Joi from "joi";

export const signupValidation = Joi.object({
    name: Joi
        .string()
        .required(),

    email: Joi
        .string()
        .email()
        .required(),

    password: Joi
        .string()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
        .required(),

    role: Joi.string().optional().default('owner'),

    otp: Joi.string().length(6).optional()
})