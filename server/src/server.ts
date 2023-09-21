import express from 'express'
import http from 'http';
import dotenv from 'dotenv-safe';
dotenv.config();

const app = express();
const port = process.env.PORT || 5173;
const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000'

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
})
