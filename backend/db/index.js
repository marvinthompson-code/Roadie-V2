require("dotenv").config();
const pgp = require("pg-promise")({});
const { DATABASE_URL} = process.env
const db = pgp(DATABASE_URL);
module.exports = db;