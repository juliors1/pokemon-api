const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
  {
    name: {type: String, require: true},
    type: {type: String },
    age:  {type:Number, default: 0}
  },
  {
    timestamps: true},
);

module.exports = mongoose.model('Pokemons', pokemonSchema)