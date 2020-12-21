const express = require("express");
const router = express.Router();

// Film model
const Film = require("../../models/Film");

// @route   GET api/films
// @desc    get all films
// @access  Public
router.get("/", (req, res) => {
  Film.find()
    .sort({ name: 1 })
    .then((films) => res.json(films));
});

// @route   POST api/films
// @desc    create film
// @access  Public
router.post("/", (req, res) => {
  const newFilm = new Film({
    name: req.body.name,
  });

  newFilm.save().then((film) => res.json(film));
});

// @route   DELETE api/films
// @desc    delete film
// @access  Public
router.delete("/:id", (req, res) => {
  Film.findById(req.params.id)
    .then((film) => film.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;