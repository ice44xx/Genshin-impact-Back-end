import mongoose from 'mongoose';

const ConstellationsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

module.exports = ConstellationsSchema;
