import * as Joi from "joi";

export const createCompanyValidation = Joi.object({
    ownerId: Joi
        .number()
        .required(),

    name: Joi
        .string()
        .required(),

    address: Joi
        .string()
        .required(),

    industry: Joi
        .string()
        .required()
})