import { IDependencies } from "@/application/interfaces/IDependencies";
import { IDeleteUserUseCase } from "@/domain/useCases";

export const deleteUserUseCase = (dependencies: IDependencies): IDeleteUserUseCase => {
    const {
        repositories: { deleteUser }
    } = dependencies;
    return {
        execute: async (data) => {
            await deleteUser(data);
        }
    }
}