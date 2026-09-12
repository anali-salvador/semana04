const express = require("express");
const router = express.Router();
const pokedexController = require("../controllers/pokedexController");

router.get("/pokedex", pokedexController.pokedex);
router.post("/pokedex", pokedexController.addPokemon);

module.exports = router;