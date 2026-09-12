const express = require("express");
const app = express();
const path = require("path");

// Configurar el motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, "public")));

// Procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

const pokedexRoutes = require("./routes/pokedexRoutes");
app.use("/", pokedexRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));