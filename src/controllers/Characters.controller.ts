import { Request, Response } from 'express';
import CharactersServices = require('../services/CharactersService');

export const CharactersController = {
  create: async (req: Request, res: Response) => {
    const {} = req.body;
    try {
      const character = await CharactersServices.CharactersServices.createCharacter(req.body);
      return res.status(201).json(character);
    } catch (error) {
      console.error('Erro ao criar o personagem: ', error);
      return res.status(500).json({ error: 'Não foi possível criar o personagem.' });
    }
  }
};
