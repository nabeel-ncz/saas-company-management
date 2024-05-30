import * as Joi from "joi";

export const createUserValidation = Joi.object({

    companyId: Joi
        .string()
        .required(),

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
