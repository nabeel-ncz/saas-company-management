import express from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
// import { controllers } from "@/presentation/controllers";

export const routes = (dependencies: IDependencies) => {

    // const {
    //     sendVerificationMail
    // } = controllers(dependencies);

    const router = express.Router();

    // router.route("/email-verification")
    //     .get(sendVerificationMail);

   
    return router;
}