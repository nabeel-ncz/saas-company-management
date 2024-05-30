import { IDependencies } from "@/application/interfaces/IDependencies";
import { createCompanyController } from "./createCompany";
import { updateCompanyController } from "./updateCompany";
import { deleteCompanyController } from "./deleteCompany";

export const controllers = (dependencies: IDependencies) => {
    return {
        createCompany: createCompanyController(dependencies),
        updateCompany: updateCompanyController(dependencies),
        deleteCompany: deleteCompanyController(dependencies)
    }
};