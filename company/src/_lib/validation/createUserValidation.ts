import * as Joi from "joi";

export const createUserValidation = Joi.object({

    name: Joi
        .string()
        .required(),

    email: Joi
        .string()
        .required(),

    role: Joi
        .string()
        .required(),

    designation: Joi
        .string()
        .required()

})
