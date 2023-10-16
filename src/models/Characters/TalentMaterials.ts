import mongoose from 'mongoose';
const talentMaterialsSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
  moraCost: {
    type: Number,
    required: true
  },
  items: [
    {
      name: String,
      quantity: Number
    }
  ]
});

module.exports = talentMaterialsSchema;
