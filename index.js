const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const { appConfiguration } = require("./src/appConfiguration");
const { mongoose } = require("./src/database");
const config = require("./src/config");

// Variables para el proyecto
const database = config.connection.dataBaseName;
const server = config.server;
const port = process.env.PORT || config.connection.request.port;
const dirname = config.dirname; // Ruta del archivo de configuracion

// Settings
// Obtiene el puerto asignado, de lo contrario usa el puerto 3000
app.set("port", port);

// Middlewares
app.use(morgan("dev")); // Muestra mensajes por consola
app.use(express.json()); // Configura servidor para uso de json
app.use(cors(server));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Para controlar quien puede consumir mi API
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  ); // Para configurar los headers que acepta la API
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); // Para declarar los métodos que acepta el API
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

config.routes.forEach((route) => {
  app.use(config.connection.prefix, require(dirname + `/routes/${route}`));
});

// Starting the server
app.listen(app.get("port"), () => {
  console.log("BD: " + database);
  console.log(`Server port , ${app.get("port")}`);
  console.log(`http://${server[0]["origin"]}`);
});