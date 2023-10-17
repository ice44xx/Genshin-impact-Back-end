import mongoose from 'mongoose';

export const StatisticsSchema = new mongoose.Schema({
  sands: {
    type: String,
    required: true
  },
  goblet: {
    type: String,
    require: true
  },
  crown: {
    type: String,
    require: true
  }
});
