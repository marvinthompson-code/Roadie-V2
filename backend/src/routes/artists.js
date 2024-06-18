const artists = require("express").Router();

const { fetchArtists } = require("../queries/artists");

artists.get("/", fetchArtists);

module.exports = artists;
