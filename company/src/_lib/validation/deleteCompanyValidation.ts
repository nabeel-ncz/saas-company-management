import * as Joi from "joi";

export const deleteCompanyValidation = Joi.object({
    id: Joi
        .number()
        .required(),

    isDeleted: Joi
        .boolean()
        .required(),
});