import { Request, Response } from 'express';
import { WeaponsService } from '../services/Weapons.service';

export const WeaponsController = {
  create: async (req: Request, res: Response) => {
    const {} = req.body;
    try {
      const weapon = await WeaponsService.createWeapon(req.body);
      return res.status(201).json(weapon);
    } catch (error) {
      console.error('Erro ao criar o personagem: ', error);
      res.status(500).json({ error: 'Não foi possível criar nova arma' });
    }
  },
  findAll: async (req: Request, res: Response) => {
    try {
      const find = await WeaponsService.findAll();
      return res.status(201).json(find);
    } catch (error) {
      console.error('Erro ao encontar todas armas: ', error);
      return res.status(500).json({ error: 'Não foi encontar todas armas.' });
    }
  }
};
