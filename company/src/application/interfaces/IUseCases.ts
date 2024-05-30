import { IDependencies } from "./IDependencies";
import {
    ICreateCompanyUseCase,
    IUpdateCompanyUseCase,
    IDeleteCompanyUseCase
} from "@/domain/useCases";

export interface IUseCases {
    createCompanyUseCase: (dependencie: IDependencies) => ICreateCompanyUseCase
    updateCompanyUseCase: (dependencie: IDependencies) => IUpdateCompanyUseCase
    deleteCompanyUseCase: (dependencie: IDependencies) => IDeleteCompanyUseCase
};