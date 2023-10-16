const talentMaterialsSchema = new mongoose.Schema({
  level: {
    type: String,
    required: true
  },
  moraCost: {
    type: Number
  },
  items: [
    {
      name: String,
      quantity: Number
    }
  ]
});

module.exports = talentMaterialsSchema;
