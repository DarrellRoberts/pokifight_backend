const express = require("express");

const { getAllPokemon, getSinglePokemon, getSingleInfo } = require("../controllers/pokemon.js")

const api = express.Router();

api.route("/pokemon").get(getAllPokemon);
api.route("/pokemon/:id").get(getSinglePokemon);
api.route("/pokemon/:id/:info").get(getSingleInfo);

module.exports = api;
