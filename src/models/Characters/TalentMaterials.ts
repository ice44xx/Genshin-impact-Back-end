import mongoose from 'mongoose';
export const TalentMaterialsSchema = new mongoose.Schema({
  level: {
    type: String
  },
  moraCost: {
    type: Number
  },
  items: [
    {
      name: String,
      quantity: Number
    }
  ]
});
