const mongoose = require('mongoose');
const DATABASE = require('../config/environment').DATABASE;

export const connectDatabase = () => {
  console.log('Conectando ao Mongo...');
  mongoose
    .connect(DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB conectado!'))
    .catch((err: Error) => console.log('Algo deu errado', err));
};

module.exports = connectDatabase;
