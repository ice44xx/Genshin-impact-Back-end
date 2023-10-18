require('dotenv').config();
import { router } from './routes';
import cors from 'cors';
import express from 'express';

const connectDatabase = require('./database/index');

const PORT = process.env.PORT || 3001;

const app = express();
connectDatabase();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
