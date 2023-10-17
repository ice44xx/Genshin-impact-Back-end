import { CharactersController } from './controllers/Characters.controller';
const express = require('express');
const router = express.Router();

//rota personagem
router.post('/characters/create', CharactersController.create);

module.exports = router;
