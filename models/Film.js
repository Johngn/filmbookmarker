const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const FilmSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
});

module.exports = Film = mongoose.model("film", FilmSchema);
