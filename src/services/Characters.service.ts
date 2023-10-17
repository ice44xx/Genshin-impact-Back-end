import { Model } from 'mongoose';
import { CharacterProps } from '../models/Characters/Characters';

const CharacterModel: Model<CharacterProps> = require('../models/Characters/Characters');

export const CharactersServices = {
  createCharacter: async (attributes: CharacterProps) => {
    try {
      const create = await CharacterModel.create(attributes);
      return create;
    } catch (error) {
      console.error('Erro ao criar o personagem: ', error);
      throw new Error('Não foi possível criar o personagem.');
    }
  }
};
