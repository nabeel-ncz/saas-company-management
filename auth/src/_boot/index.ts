import * as express from "express"
import { Application } from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "@/data-source"

export const main = async () => {
    try {
        await AppDataSource.initialize();
        const app: Application = express();
        app.use(bodyParser.json());
    
        app.listen(3001, () => {
            console.log("auth server has started on port 3001")
        })

    } catch (error) {
        console.log(error);
    }
}
