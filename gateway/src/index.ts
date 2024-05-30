import * as express from "express";
import { Application, Request, Response, NextFunction } from "express";
import { createProxyMiddleware, responseInterceptor } from "http-proxy-middleware";

const app: Application = express();

// Health check endpoint
app.all('/health', (req: Request, res: Response) => {
    res.send(`⚡⚡⚡`);
});

// Proxy middleware options with error handling
const proxyOptions = (target: string) => ({
    target,
    changeOrigin: true,
    onError: (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(`Error proxying request to ${target}:`, err.message);
        res.status(500).send('Proxy error');
    }
});

// Proxy middlewares
const AuthService = createProxyMiddleware<Request, Response>(proxyOptions('http://localhost:3001/api/auth'));
const UserService = createProxyMiddleware<Request, Response>(proxyOptions('http://localhost:3003/api/user'));
const CompanyService = createProxyMiddleware<Request, Response>(proxyOptions('http://localhost:3004/api/company'));

app.use('/api/auth', AuthService);
app.use('/api/user', UserService);
app.use('/api/company', CompanyService);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Gateway server is listening at ${PORT}`);
});

export default app;
