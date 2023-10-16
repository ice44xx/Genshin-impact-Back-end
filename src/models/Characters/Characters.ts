const moongodb = require('mongoose');

interface Character {
  name: string;
  desc: string;
  background: string;
  stars: number;
}

const CharactersSchema = new moongodb.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true,
    nique: true
  },
  background: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  }
});

const CharactersModel = moongodb.model('Characters', CharactersSchema);
module.exports = CharactersModel;
