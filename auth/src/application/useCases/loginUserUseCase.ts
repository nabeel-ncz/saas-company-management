import { IDependencies } from "@/application/interfaces/IDependencies";

export const loginUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { findUserByEmail },
        utilities: { comparePassword }
    } = dependencies;

    return {
        execute: async ({
            email,
            password
        }: Record<string, string>) => {
            try {

                const result = await findUserByEmail({
                    email
                });

                if (!result) {
                    throw new Error("Email or password is incorrect!");
                }

                const match = await comparePassword({
                    original: password,
                    encrypted: result.password
                });

                if (!match) {
                    throw new Error("Email or password is incorrect!");
                }

                return result;

            } catch (error: any) {
                throw new Error(error.message);
            }
        }
    }
}