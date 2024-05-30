import { IDependencies } from "@/application/interfaces/IDependencies";
import { IUpdateUserUseCase } from "@/domain/useCases";

export const updateUserUseCase = (dependencies: IDependencies): IUpdateUserUseCase => {
    const {
        repositories: { updateUser }
    } = dependencies;
    return {
        execute: async (data) => {
            const res = await updateUser(data);
            if(!res) {
                throw new Error('company updation failed');
            }
            return res;
        }
    }
}