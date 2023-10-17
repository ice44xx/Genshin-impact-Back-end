import mongoose from 'mongoose';
const Ascensions = require('./Ascensions');
const Refinements = require('./Refinements');
const Statistics = require('./Statistics');

export interface Weapon {
  name: String;
  desc: String;
  refinement: [];
  ascensions: [];
  statistics: [];
}

const WeaponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  refinement: [Refinements],
  ascensions: [Ascensions],
  statistics: [Statistics]
});

const WeaponModel = mongoose.model('Weapon', WeaponSchema);
module.exports = WeaponModel;