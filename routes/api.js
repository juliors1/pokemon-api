var express = require("express");
var router = express.Router();
const pokemonsCtrl = require("../controllers/api/pokemons");

router.get("/pokemons", pokemonsCtrl.index);
router.get("/pokemons/:id", pokemonsCtrl.show);
router.post("/pokemons", pokemonsCtrl.create);
router.put("/pokemons/:id", pokemonsCtrl.update);
router.delete("/pokemons/:id", pokemonsCtrl.delete);


module.exports = router;
