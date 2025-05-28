var mongoose = require("mongoose");

var CharacterSchema = new mongoose.Schema(
  {
    name: String,
    element: String,
    weapon: String,
    region: String,
    release_version: String,
  },
  { collection: "genshin_impact_characters" }
);
module.exports = mongoose.model("CharacterModel", CharacterSchema);
