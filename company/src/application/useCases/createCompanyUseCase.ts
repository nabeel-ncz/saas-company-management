import { IDependencies } from "@/application/interfaces/IDependencies";
import { ICreateCompanyUseCase } from "@/domain/useCases";

export const createCompanyUseCase = (dependencies: IDependencies): ICreateCompanyUseCase => {
    const {
        repositories: { createCompany }
    } = dependencies;
    return {
        execute: async (data) => {
            const res = await createCompany(data);
            if(!res) {
                throw new Error('company creation failed');
            }
            return res;
        }
    }
}