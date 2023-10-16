import mongoose from 'mongoose';

const SkillsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

module.exports = SkillsSchema;
