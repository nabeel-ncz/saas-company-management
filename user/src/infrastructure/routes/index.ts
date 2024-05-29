import * as express from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const routes = (dependencies: IDependencies) => {
    const router = express.Router();

    return router;
}