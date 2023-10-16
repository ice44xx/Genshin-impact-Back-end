require('dotenv').config();
const router = require('./routes');
const express = require('express');
const connectDatabase = require('./database/index');

const PORT = process.env.PORT || 3001;

const app = express();
connectDatabase();
app.use(express.static('public'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
