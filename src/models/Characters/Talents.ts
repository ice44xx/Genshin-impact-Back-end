import mongoose from 'mongoose';
export const TalentSchema = new mongoose.Schema({
  name: {
    type: String
  },
  desc: {
    type: String
  }
});
