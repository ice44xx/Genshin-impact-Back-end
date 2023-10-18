import mongoose from 'mongoose';
import { AscensionsSchema } from './Ascensions';
import { SkillsSchema } from './Skills';
import { ConstellationsSchema } from './Constellations';
import { TalentSchema } from './Talents';
import { StatisticsSchema } from './Statistics';
import { TalentMaterialsSchema } from './TalentMaterials';
import { CompsSchema } from './Comps';

export interface CharacterProps {
  name: String;
  desc: String;
  weak: String;
  img: String;
  skills: String[];
  talents: any[];
  statistics: any[];
  teams: String[];
  background: String;
  stars: Number;
}

const CharactersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  weak: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  skills: [SkillsSchema],
  talents: [TalentSchema],
  constellations: [ConstellationsSchema],
  ascensions: [AscensionsSchema],
  talentMaterials: [TalentMaterialsSchema],
  statistics: [StatisticsSchema],
  teams: [
    {
      title: String,
      comps: [CompsSchema]
    }
  ],
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
