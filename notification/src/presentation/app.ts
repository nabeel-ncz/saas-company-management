import express, {
    Application,
    Request,
    Response,
    NextFunction
} from "express";
import { dependencies } from "@/_boot/dependencies";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { routes } from "@/infrastructure/routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.all('/health', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Notification service ON!"
    })
});

app.use('/api/notification', routes(dependencies));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(new Error('Page not found!'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(400).json('Something went wrong');
});

export default app;
