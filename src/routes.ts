import { ArtifactsController } from './controllers/Artifacts.controller';
import { CharactersController } from './controllers/Characters.controller';
import { WeaponsController } from './controllers/Weapons.controller';
import express from 'express';
const router = express.Router();

//rota personagem
router.post('/characters/create', CharactersController.create);
router.get('/characters/:name', CharactersController.findCharacterByName);
router.get('/characters', CharactersController.findAll);

//rota armas
router.post('/weapons/create', WeaponsController.create);
router.get('/weapons', WeaponsController.findAll);

//rota artefatos
router.post('/artifacts/create', ArtifactsController.create);
router.get('/artifacts', ArtifactsController.findAll);

export { router };
