import { IDependencies } from "./IDependencies";
import {
    ICreateCompanyUseCase,
    IUpdateCompanyUseCase,
    IDeleteCompanyUseCase,
    IGetCompaniesUseCase,
    ICreateUserUseCase,
    IUpdateUserUseCase,
    IDeleteUserUseCase
} from "@/domain/useCases";

export interface IUseCases {
    createCompanyUseCase: (dependencie: IDependencies) => ICreateCompanyUseCase
    updateCompanyUseCase: (dependencie: IDependencies) => IUpdateCompanyUseCase
    deleteCompanyUseCase: (dependencie: IDependencies) => IDeleteCompanyUseCase
    getCompaniesUseCase: (dependencie: IDependencies) => IGetCompaniesUseCase
    createUserUseCase: (dependencie: IDependencies) => ICreateUserUseCase
    updateUserUseCase: (dependencie: IDependencies) => IUpdateUserUseCase
    deleteUserUseCase: (dependencie: IDependencies) => IDeleteUserUseCase
};