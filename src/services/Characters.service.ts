import { CharacterProps, CharactersModel } from '../models/Characters/Characters';

export const CharactersServices = {
  createCharacter: async (attributes: CharacterProps) => {
    try {
      const create = await CharactersModel.create(attributes);
      return create;
    } catch (error) {
      console.error('Erro ao criar o personagem: ', error);
      throw new Error('Não foi possível criar o personagem.');
    }
  },
  findCharacterByName: async (name: string) => {
    try {
      const regex = new RegExp(name, 'i');
      const characters = await CharactersModel.find({ name: { $regex: regex } });

      if (!characters || characters.length === 0) return null;

      return characters;
    } catch (error) {
      console.error('Erro ao encontrar o personagem: ', error);
      throw new Error('Não foi possível encontrar o personagem.');
    }
  },
  findAll: async () => {
    try {
      const characters = await CharactersModel.find();
      return characters;
    } catch (error) {
      console.error('Erro ao encontrar todos os personagens: ', error);
      throw new Error('Não foi possível encontrar todos os personagens.');
    }
  }
};
