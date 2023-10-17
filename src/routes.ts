import { CharactersController } from './controllers/Characters.controller';
import { WeaponsController } from './controllers/Weapons.controller';
const express = require('express');
const router = express.Router();

//rota personagem
router.post('/characters/create', CharactersController.create);

//rota armas
router.post('/weapons/create', WeaponsController.create);

module.exports = router;
