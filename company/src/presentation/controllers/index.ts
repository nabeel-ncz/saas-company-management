import { IDependencies } from "@/application/interfaces/IDependencies";
import { createCompanyController } from "./createCompany";
import { updateCompanyController } from "./updateCompany";
import { deleteCompanyController } from "./deleteCompany";
import { getCompaniesController } from "./getCompanies";
import { createUserController } from "./createUser";

export const controllers = (dependencies: IDependencies) => {
    return {
        createCompany: createCompanyController(dependencies),
        updateCompany: updateCompanyController(dependencies),
        deleteCompany: deleteCompanyController(dependencies),
        getCompanies: getCompaniesController(dependencies),
        createUser: createUserController(dependencies)
    }
};