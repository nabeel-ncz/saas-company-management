import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";
import { RequireAuth } from "@company-management/common";
import { requireOwner } from "@/presentation/middleware";

export const routes = (dependencies: IDependencies) => {

    const {
        createCompany,
        updateCompany,
        deleteCompany,
        getCompanies,
        createUser,
        updateUser,
        deleteUser,
        getUser
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

    router.route('/employee/:id')
        .get(RequireAuth, requireOwner, getUser)

    return router;
}