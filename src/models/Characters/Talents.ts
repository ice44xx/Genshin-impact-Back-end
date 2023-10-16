const TalentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  desc: {
    type: String
  }
});

module.exports = TalentSchema;
