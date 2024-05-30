import * as joi from "joi";

export interface IUtilities {
    createCompanyValidation: joi.ObjectSchema<any>;
    updateCompanyValidation: joi.ObjectSchema<any>;
    deleteCompanyValidation: joi.ObjectSchema<any>;
}