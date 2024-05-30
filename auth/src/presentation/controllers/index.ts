import { IDependencies } from "@/application/interfaces/IDependencies";
import { signupController } from "./signup";
import { loginController } from "./login";
import { logoutController } from "./logout";

export const controllers = (dependencies: IDependencies) => {
    return {
        signup: signupController(dependencies),
        login: loginController(dependencies),
        logout: logoutController(dependencies)
    }
};