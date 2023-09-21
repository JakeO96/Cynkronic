"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
dotenv_safe_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5173;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
