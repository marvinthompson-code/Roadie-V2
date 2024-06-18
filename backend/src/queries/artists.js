const db = require("../../db/index");

const fetchArtists = async (req, res, next) => {
  try {
    let artists = await db.any("SELECT * FROM artists");
    res.status(200).json({
      status: "Success",
      message: "Fetched all artists: ",
      body: artists,
    });
  } catch (error) {
    res.json({
      status: "Error",
      message: "Unable to fetch all artists.",
    });
  }
};

module.exports = {
    fetchArtists
}