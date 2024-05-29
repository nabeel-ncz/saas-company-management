import * as express from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const routes = (dependencies: IDependencies) => {
    
    const router = express.Router();

    const {
        signup
    } = controllers(dependencies);

    router.post('/sign-up', signup);

    return router;
}