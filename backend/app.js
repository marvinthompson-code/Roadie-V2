const express = require("express");
require("dotenv").config(); // Allows interaction with .env variables
const bodyParser = require("body-parser"); // Allows req.body for incoming requests
const cors = require("cors"); // Browser Security
const path = require("path");

const APP = express();
const PORT = process.env.PORT;

// app.use
APP.use(cors());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(express.static(path.resolve(__dirname, "./public"))); // path

// Router
const artistsRouter = require("./src/routes/artists");

APP.use("/artists", artistsRouter);

APP.listen(PORT, () => {
  console.log("Live on port ", PORT);
});
