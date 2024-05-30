import * as express from "express";
import { Application } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app: Application = express();

app.all('/health', (req, res) => {
    res.send(`⚡⚡⚡`);
});

const services = [
    {
        url: process.env.AUTH_SERVICE_PREFIX || '/api/auth',
        proxy: {
            target: process.env.AUTH_SERVICE_URL || "http://localhost:3001",
            changeOrigin: true,
        }
    },
    {
        url: process.env.USER_SERVICE_PREFIX || '/api/user',
        proxy: {
            target: process.env.USER_SERVICE_URL || "http://localhost:3003",
            changeOrigin: true,
        }
    },
    {
        url: process.env.COMPANY_SERVICE_PREFIX || '/api/company',
        proxy: {
            target: process.env.COMPANY_SERVICE_URL || "http://localhost:3004",
            changeOrigin: true,
        }
    }
]

services.forEach((route: { url: string, proxy: any }) => {
    app.use(route.url, createProxyMiddleware(route.proxy));
});

app.listen(5000, () => {
    console.log(`gateway server is listening at ${5000}`);
})

export default app;