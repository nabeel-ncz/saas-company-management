import { IDependencies } from "@/application/interfaces/IDependencies";
import { IDeleteCompanyUseCase } from "@/domain/useCases";

export const deleteCompanyUseCase = (dependencies: IDependencies): IDeleteCompanyUseCase => {
    const {
        repositories: { deleteCompany }
    } = dependencies;
    return {
        execute: async (data) => {
            await deleteCompany(data);
        }
    }
}