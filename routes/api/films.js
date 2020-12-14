const express = require("express");
const router = express.Router();

// Film model
const Film = require("../../models/Film");

// @route   GET api.films
// @desc    get all films
// @access  Public
router.get("/", (req, res) => {
  Film.find()
    .sort({ name: 1 })
    .then((films) => res.json(films));
});

module.exports = router;
