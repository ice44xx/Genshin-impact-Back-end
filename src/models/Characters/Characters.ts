import mongoose from 'mongoose';
import { AscensionsSchema } from './Ascensions';
import { SkillsSchema } from './Skills';
import { ConstellationsSchema } from './Constellations';
import { TalentSchema } from './Talents';
import { StatisticsSchema } from './Statistics';

export interface CharacterProps {
  name: String;
  desc: String;
  skills: any[];
  talents: any[];
  statistics: any[];
  stars: Number;
}

const CharactersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
  },
  skills: [SkillsSchema],
  talents: [TalentSchema],
  constellations: [ConstellationsSchema],
  ascensions: [AscensionsSchema],
  talentMaterials: [TalentSchema],
  statistics: [StatisticsSchema],
  background: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
});

export const CharactersModel = mongoose.model('Characters', CharactersSchema);
