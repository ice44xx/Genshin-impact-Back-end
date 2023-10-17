import { WeaponModel, WeaponProps } from '../models/Weapons/Weapons';

export const WeaponsService = {
  createWeapon: async (attributes: WeaponProps) => {
    try {
      const create = await WeaponModel.create(attributes);
      return create;
    } catch (error) {
      console.error('Erro ao criar arma: ', error);
      throw new Error('Não foi possível criar uma nova arma.');
    }
  },
  findAll: async () => {
    try {
      const find = await WeaponModel.find();
      return find;
    } catch (error) {
      console.error('Erro ao encontrar todos as armas: ', error);
      throw new Error('Não foi possível encontrar todos as armas.');
    }
  }
};
