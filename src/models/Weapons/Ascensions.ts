import mongoose from 'mongoose';
export const AscensionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  moraCost: {
    type: String,
    required: true
  },
  items: [
    {
      name: String,
      quantity: Number,
      image: String
    },
    {
      name: String,
      quantity: Number,
      image: String
    },
    {
      name: String,
      quantity: Number,
      image: String
    }
  ]
});
