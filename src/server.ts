require('dotenv').config();
import express = require('express');
const app = express();
const connectDatabase = require('./database/index');

const PORT = process.env.PORT || 3001;

connectDatabase();
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
