import mongoose from 'mongoose';
const RefinementsSchema = new mongoose.Schema({
  refinement: [
    {
      desc: {
        type: String
      }
    }
  ]
});

module.exports = RefinementsSchema;
