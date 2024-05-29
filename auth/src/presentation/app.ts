import * as express from "express";
import * as cookieParser from "cookie-parser";
import { Request, Response, NextFunction, Application } from "express";
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

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new Error('Page not found!'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json('something webt wrong');
});

export default app;