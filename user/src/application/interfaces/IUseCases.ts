import { IGetUserByIdUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    getUserByIdUseCase: (dependencies: IDependencies) => IGetUserByIdUseCase;
};