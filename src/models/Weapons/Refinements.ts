import mongoose from 'mongoose';
const RefinementsSchema = new mongoose.Schema({
  desc: {
    type: String
  }
});

module.exports = RefinementsSchema;
