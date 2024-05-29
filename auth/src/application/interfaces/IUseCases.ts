import { ICreateUserUseCase, ILoginUseCase } from "@/domain/useCases";

export interface IUseCases {
    createUserUseCase: (data: Record<string, string>) => ICreateUserUseCase;
    loginUseCase:  (data: { email: string }) => ILoginUseCase;
}