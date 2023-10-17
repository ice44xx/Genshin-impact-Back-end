import mongoose from 'mongoose';
const Skills = require('./Skills');
const Talents = require('./Talents');
const Constellations = require('./Constellations');
const Ascensions = require('./Ascensions');
const TalentMaterials = require('./TalentMaterials');
const Statistics = require('./Statistics');

export interface Character {
  name: String;
  desc: String;
  skills: [];
  talents: [];
  statistics: [];
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
  skills: [Skills],
  talents: [Talents],
  constellations: [Constellations],
  ascensions: [Ascensions],
  talentMaterials: [TalentMaterials],
  statistics: [Statistics],
  background: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
});

const CharactersModel = mongoose.model('Characters', CharactersSchema);
module.exports = CharactersModel;
