import { IDependencies } from "@/application/interfaces/IDependencies";
import { IGetCompanyByIdUseCase } from "@/domain/useCases";

export const getCompanyByIdUseCase = (dependencies: IDependencies): IGetCompanyByIdUseCase => {
    const {
        repositories: { getCompanyById }
    } = dependencies;
    return {
        execute: async (id) => {
            const res = await getCompanyById(id);
            return res;
        }
    }
}