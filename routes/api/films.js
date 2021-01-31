const express = require("express");
const router = express.Router();

// Film model
const Film = require("../../models/Film");

// @route   GET /api/films
// @desc    get all films
// @access  Public
router.get("/", (req, res) => {
    Film.find()
        .then(films => res.json(films))
        .catch(err => console.log(err));
});

// @route   POST /api/films
// @desc    add film to watchlist
// @access  Public
router.post("/", (req, res) => {
    Film.exists({ id: req.body.id }, (err, filmExists) => {
        if (!filmExists) {
            const newFilm = new Film({
                id: req.body.id,
                title: req.body.title,
                year: req.body.year,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
            });

            newFilm.save().then(film => res.json(film));
        } else {
            return res.status(400).json({
                success: false,
                message: "Film already on watchlist",
            });
        }
    });
});

// @route   DELETE /api/films
// @desc    delete film
// @access  Public
router.delete("/:id", (req, res) => {
    Film.findById(req.params.id)
        .then(film => film.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
