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
  }
};
