const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const films = require("./routes/api/films");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch(() => console.log("Error"));

// Use routes
app.use("/api/films", films);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
