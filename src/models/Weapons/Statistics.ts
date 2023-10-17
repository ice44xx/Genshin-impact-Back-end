import mongoose from 'mongoose';
const StatisticsWeaponSchema = new mongoose.Schema({
  statistics: [
    {
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
    }
  ]
});

module.exports = StatisticsWeaponSchema;
