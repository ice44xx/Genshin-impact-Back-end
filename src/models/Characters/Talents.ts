import mongoose from 'mongoose';
const TalentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

module.exports = TalentSchema;
