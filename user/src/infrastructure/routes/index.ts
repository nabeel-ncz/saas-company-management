import * as express from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";
import { RequireAuth } from "@company-management/common";

export const routes = (dependencies: IDependencies) => {
    const router = express.Router();

    const {
        getUser
    } = controllers(dependencies);

    router.get('/', RequireAuth, getUser);

    return router;
}