"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
// Health check endpoint
app.all('/health', (req, res) => {
    res.send(`⚡⚡⚡`);
});
// Proxy middleware options with error handling
const proxyOptions = (target) => ({
    target,
    changeOrigin: true,
    onError: (err, req, res, next) => {
        console.error(`Error proxying request to ${target}:`, err.message);
        res.status(500).send('Proxy error');
    }
});
// Proxy middlewares
const AuthService = (0, http_proxy_middleware_1.createProxyMiddleware)(proxyOptions(process.env.AUTH_SERVICE_URL || 'http://localhost:3001/api/auth'));
const UserService = (0, http_proxy_middleware_1.createProxyMiddleware)(proxyOptions(process.env.USER_SERVICE_URL || 'http://localhost:3003/api/user'));
const CompanyService = (0, http_proxy_middleware_1.createProxyMiddleware)(proxyOptions(process.env.COMPANY_SERVICE_URL || 'http://localhost:3004/api/company'));
app.use('/api/auth', AuthService);
app.use('/api/user', UserService);
app.use('/api/company', CompanyService);
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Gateway server is listening at ${PORT}`);
});
exports.default = app;
