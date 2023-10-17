import mongoose from 'mongoose';

export const CompsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  image: {
    type: String
  }
});
