import { IDependencies } from "@/application/interfaces/IDependencies";

export const createUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { createUser }
    } = dependencies;
    return {
        execute: async (data: Record<string, string>) => {
            const res = await createUser(data);
            return res;
        }
    }
}