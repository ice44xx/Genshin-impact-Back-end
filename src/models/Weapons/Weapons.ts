import mongoose from 'mongoose';
import { RefinementsSchema } from './Refinements';
import { AscensionsSchema } from './Ascensions';
import { StatisticsWeaponSchema } from './Statistics';

export interface WeaponProps {
  name: String;
  desc: String;
  model: String;
  refinement: any[];
  ascensions: any[];
  statistics: any[];
}

const WeaponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  secondary: {
    type: String
  },
  desc: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  refinement: [RefinementsSchema],
  ascensions: [AscensionsSchema],
  statistics: [StatisticsWeaponSchema]
});

export const WeaponModel = mongoose.model('Weapon', WeaponSchema);
