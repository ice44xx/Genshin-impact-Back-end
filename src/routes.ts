import { AdminController } from './controllers/Admin.controller';
import { ArtifactsController } from './controllers/Artifacts.controller';
import { CharactersController } from './controllers/Characters.controller';
import { WeaponsController } from './controllers/Weapons.controller';
import express from 'express';
import { authAdmin } from './middleware/authentication';
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

//rota de admin
router.post('/admin/create', authAdmin, AdminController.create);

export { router };
