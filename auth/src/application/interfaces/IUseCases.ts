import { IDependencies } from "./IDependencies";
import { ICreateUserUseCase, ILoginUserUseCase } from "@/domain/useCases";

export interface IUseCases {
    createUserUseCase: (dependencies: IDependencies) => ICreateUserUseCase;
    loginUserUseCase:  (dependencies: IDependencies) => ILoginUserUseCase;
}