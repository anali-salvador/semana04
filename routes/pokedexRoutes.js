const express = require("express");
const router = express.Router();
const pokedexController = require("../controllers/pokedexController");

router.get("/pokedex", pokedexController.pokedex);
router.post("/pokedex", pokedexController.addPokemon);
router.post("/pokedex/edit/:localId", pokedexController.editPokemon);
router.post("/pokedex/delete/:localId", pokedexController.deletePokemon);

module.exports = router;