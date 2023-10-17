import { Model } from 'mongoose';
import { WeaponProps } from '../models/Weapons/Weapons';

const WeaponModel: Model<WeaponProps> = require('../models/Weapons/Weapons');

export const WeaponsService = {
  createWeapon: async (attributes: WeaponProps) => {
    try {
      const create = await WeaponModel.create(attributes);
      return create;
    } catch (error) {
      console.error('Erro ao criar arma: ', error);
      throw new Error('Não foi possível criar uma nova arma.');
    }
  }
};
