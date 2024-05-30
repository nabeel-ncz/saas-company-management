import * as express from "express";
import * as cookieParser from "cookie-parser";
import { Request, Response, NextFunction, Application } from "express";
import { ErrorHandler, NotFoundError } from "@company-management/common";
import { dependencies } from "@/_boot/dependencies";
import { routes } from "@/infrastructure/routes";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.all('/health', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Auth service ON!"
    })
});

app.use('/api/auth', routes(dependencies));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(ErrorHandler);

export default app;