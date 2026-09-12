function getTipoSlug(tipo) {
  const t = tipo.toLowerCase();
  if (t.includes("elect")) return "electrico";
  if (t.includes("fuego") || t.includes("fire")) return "fuego";
  if (t.includes("agua") || t.includes("water")) return "agua";
  if (t.includes("planta") || t.includes("grass")) return "planta";
  return "default";
}

let contadorId = 100;

const pokemons = [
  { localId: 1, id: 25, nombre: "Pikachu", tipo: "Eléctrico", tipoSlug: "electrico", nivel: 25, ataque: "Impactrueno", region: "Kanto" },
  { localId: 2, id: 4, nombre: "Charmander", tipo: "Fuego", tipoSlug: "fuego", nivel: 12, ataque: "Ascuas", region: "Kanto" },
  { localId: 3, id: 1, nombre: "Bulbasaur", tipo: "Planta", tipoSlug: "planta", nivel: 10, ataque: "Látigo Cepa", region: "Kanto" },
  { localId: 4, id: 7, nombre: "Squirtle", tipo: "Agua", tipoSlug: "agua", nivel: 11, ataque: "Pistola Agua", region: "Kanto" }
];

const pokedex = (req, res) => {
  res.render("pokedex", { pokemons });
};

const addPokemon = (req, res) => {
  const { nombre, tipo, nivel, ataque, region } = req.body;
  pokemons.push({
    localId: contadorId++,
    id: null,
    nombre,
    tipo,
    tipoSlug: getTipoSlug(tipo),
    nivel,
    ataque,
    region
  });
  res.redirect('/pokedex');
};

const editPokemon = (req, res) => {
  const localId = parseInt(req.params.localId);
  const { nombre, tipo, nivel, ataque, region } = req.body;
  const index = pokemons.findIndex(p => p.localId === localId);

  if (index !== -1) {
    pokemons[index] = {
      ...pokemons[index],
      nombre,
      tipo,
      tipoSlug: getTipoSlug(tipo),
      nivel,
      ataque,
      region
    };
  }
  res.redirect('/pokedex');
};

const deletePokemon = (req, res) => {
  const localId = parseInt(req.params.localId);
  const index = pokemons.findIndex(p => p.localId === localId);

  if (index !== -1) {
    pokemons.splice(index, 1);
  }
  res.redirect('/pokedex');
};

const pokedexController = { pokedex, addPokemon, editPokemon, deletePokemon };

module.exports = pokedexController;