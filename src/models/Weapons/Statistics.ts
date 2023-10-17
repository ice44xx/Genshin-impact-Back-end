import mongoose from 'mongoose';

export const StatisticsWeaponSchema = new mongoose.Schema({
  atqBasic: {
    type: Number
  },
  nivel: {
    type: Number
  },
  attributes: [
    {
      name: {
        type: String,
        required: true
      },
      damage: {
        type: Number
      }
    }
  ],
  ascension: {
    type: Number
  }
});
