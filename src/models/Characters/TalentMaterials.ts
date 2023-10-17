import mongoose from 'mongoose';
export const talentMaterialsSchema = new mongoose.Schema({
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
