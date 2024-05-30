import { IDependencies } from "@/application/interfaces/IDependencies";
import { IGetUserByIdUseCase } from "@/domain/useCases";

export const getUserByIdUseCase = (dependencies: IDependencies): IGetUserByIdUseCase => {
    const {
        repositories: { findUserById }
    } = dependencies;
    return {
        execute: async (id) => {
            const res = await findUserById(id);
            return res;
        }
    }
}