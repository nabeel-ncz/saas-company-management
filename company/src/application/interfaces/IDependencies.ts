import { IRepositories } from "./IRepositories";
import { IUseCases } from "./IUseCases";
import { IUtilities } from "./IUtilities";

export interface IDependencies {
    repositories: IRepositories
    useCases: IUseCases
    utilities: IUtilities
};