import { Request, Response } from 'express';
import { CharactersServices } from '../services/Characters.service';

export const CharactersController = {
  create: async (req: Request, res: Response) => {
    const {} = req.body;
    try {
      const character = await CharactersServices.createCharacter(req.body);
      return res.status(201).json(character);
    } catch (error) {
      console.error('Erro ao criar o personagem: ', error);
      return res.status(500).json({ error: 'Não foi possível criar o personagem.' });
    }
  },
  findCharacterByName: async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const character = await CharactersServices.findCharacterByName(name);
      if (!character) {
        return res.status(404).json({ message: 'Personagem não encontrado' });
      }
      return res.status(201).json(character);
    } catch (error) {
      console.error('Erro ao encontrar o personagem: ', error);
      return res.status(500).json({ message: 'Não foi possível encontrar o personagem' });
    }
  },
  findAll: async (req: Request, res: Response) => {
    try {
      const characters = await CharactersServices.findAll();
      return res.status(201).json(characters);
    } catch (error) {
      console.error('Erro ao encontrar os personagens');
      return res.status(500).json({ message: 'Não foi possível encontrar os personagens' });
    }
  }
};
