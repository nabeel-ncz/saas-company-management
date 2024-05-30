import { IDependencies } from "@/application/interfaces/IDependencies";
import { getUserController } from "./getUser";

export const controllers = (dependencies: IDependencies) => {
    return {
        getUser: getUserController(dependencies)
    }
};