import { IDependencies } from "@/application/interfaces/IDependencies";
import { IGetCompaniesUseCase } from "@/domain/useCases";

export const getCompaniesUseCase = (dependencies: IDependencies): IGetCompaniesUseCase => {
    const {
        repositories: { getCompaniesByOwnerId }
    } = dependencies;
    return {
        execute: async (data) => {
            const res = await getCompaniesByOwnerId(data.ownerId);
            return res;
        }
    }
}