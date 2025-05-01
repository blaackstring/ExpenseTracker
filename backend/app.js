
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connection from './db/connection.js';
import authroute from './routes/AuthRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import Expenseroute from './routes/ExpenseRoute.js';

const app = express();
connection();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['POST', 'PUT', 'GET', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
}));

app.use('/api/auth', authroute);
app.use('/api/user', Expenseroute);
console.log('Resolved path:', path.join(__dirname, '../frontend/dist/index.html'));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
