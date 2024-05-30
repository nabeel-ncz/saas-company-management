import * as Joi from "joi";

export const updateCompanyValidation = Joi.object({
    id: Joi
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