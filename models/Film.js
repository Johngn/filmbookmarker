const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const FilmSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Item = mongoose.model("film", FilmSchema);
