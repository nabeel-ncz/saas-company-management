import { IDependencies } from "@/application/interfaces/IDependencies";
import { IUpdateCompanyUseCase } from "@/domain/useCases";

export const updateCompanyUseCase = (dependencies: IDependencies): IUpdateCompanyUseCase => {
    const {
        repositories: { updateCompany }
    } = dependencies;
    return {
        execute: async (data) => {
            const res = await updateCompany(data);
            if(!res) {
                throw new Error('company updation failed');
            }
            return res;
        }
    }
}