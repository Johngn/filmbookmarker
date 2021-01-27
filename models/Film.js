const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const FilmSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
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
    poster_path: {
        type: String,
        require: true,
    },
});

module.exports = Film = mongoose.model("film", FilmSchema);
