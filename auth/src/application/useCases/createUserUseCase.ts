import { IDependencies } from "@/application/interfaces/IDependencies";
import { ICreateUserUseCase } from "@/domain/useCases";

export const createUserUseCase = (dependencies: IDependencies): ICreateUserUseCase => {
    const {
        repositories: { createUser }
    } = dependencies;
    return {
        execute: async (data) => {
            const res = await createUser(data);
            return res;
        }
    }
}