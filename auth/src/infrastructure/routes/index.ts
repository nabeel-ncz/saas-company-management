import * as express from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const routes = (dependencies: IDependencies) => {
    
    const router = express.Router();

    const {
        signup,
        login,
        logout
    } = controllers(dependencies);

    router.post('/signup', signup);
    router.post('/login', login);
    router.delete('/logout', logout);

    return router;
}