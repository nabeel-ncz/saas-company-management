import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";

export const routes = (dependencies: IDependencies) => {

    const {
        createCompany,
        updateCompany,
        deleteCompany
    } = controllers(dependencies);

    const router = Router();

    router.route('/')
        .post(createCompany)
        .put(updateCompany)
        .delete(deleteCompany);


    return router;
}