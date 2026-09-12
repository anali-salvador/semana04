function getTipoSlug(tipo) {
  const t = tipo.toLowerCase();
  if (t.includes("elect")) return "electrico";
  if (t.includes("fuego") || t.includes("fire")) return "fuego";
  if (t.includes("agua") || t.includes("water")) return "agua";
  if (t.includes("planta") || t.includes("grass")) return "planta";
  return "default";
}

// "Base de datos" en memoria
const pokemons = [
  { id: 25, nombre: "Pikachu", tipo: "Eléctrico", tipoSlug: "electrico", nivel: 25, ataque: "Impactrueno", region: "Kanto" },
  { id: 4, nombre: "Charmander", tipo: "Fuego", tipoSlug: "fuego", nivel: 12, ataque: "Ascuas", region: "Kanto" },
  { id: 1, nombre: "Bulbasaur", tipo: "Planta", tipoSlug: "planta", nivel: 10, ataque: "Látigo Cepa", region: "Kanto" },
  { id: 7, nombre: "Squirtle", tipo: "Agua", tipoSlug: "agua", nivel: 11, ataque: "Pistola Agua", region: "Kanto" }
];

const pokedex = (req, res) => {
  res.render("pokedex", { pokemons });
};

const addPokemon = (req, res) => {
  const { nombre, tipo, nivel, ataque, region } = req.body;
  pokemons.push({
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

const pokedexController = { pokedex, addPokemon };

module.exports = pokedexController;