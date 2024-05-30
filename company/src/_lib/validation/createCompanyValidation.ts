import * as Joi from "joi";

export const createCompanyValidation = Joi.object({

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