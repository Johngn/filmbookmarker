const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const films = require("./routes/api/films");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Mongodb connected"))
    .catch(() => console.log("Error - Mongodb not connected"));

// Use routes
app.use("/api/films", films);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
