import mongoose from 'mongoose';
const AscensionsSchema = new mongoose.Schema({
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
      quantity: Number
    },
    {
      name: String,
      quantity: Number
    },
    {
      name: String,
      quantity: Number
    }
  ]
});

module.exports = AscensionsSchema;
