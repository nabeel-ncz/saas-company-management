import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";
import { RequireAuth } from "@company-management/common";
import { requireOwner } from "@/presentation/middleware";
import { createUser, deleteUser, updateUser } from "../database/postgres/repositories";

export const routes = (dependencies: IDependencies) => {

    const {
        createCompany,
        updateCompany,
        deleteCompany,
        getCompanies
    } = controllers(dependencies);

    const router = Router();

    router.route('/')
        .get(RequireAuth, requireOwner, getCompanies)
        .post(RequireAuth, requireOwner, createCompany)
        .put(RequireAuth, requireOwner, updateCompany)
        .delete(RequireAuth, requireOwner, deleteCompany);

    router.route('/employee')
        .post(RequireAuth, requireOwner, createUser)
        .put(RequireAuth, requireOwner, updateUser)
        .delete(RequireAuth, requireOwner, deleteUser);

    return router;
}