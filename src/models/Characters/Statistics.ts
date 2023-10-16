import mongoose from 'mongoose';

const StatisticsSchema = new mongoose.Schema({
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

module.exports = StatisticsSchema;
