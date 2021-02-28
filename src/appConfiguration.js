const fs = require("fs");

const utils = require("./middle/utils.middle");
const config = require("./config");

// Modules Loading
config.controllers = fs.readdirSync(__dirname + "/controllers");
config.routes = fs.readdirSync(__dirname + "/routes");
config.dirname = __dirname;

// Constante de desarrollo
const envFilePath = __dirname + "/../.env"; // Ruta del archivo de configuracion

const existPath = fs.existsSync(envFilePath); // Booleano si existe el envFilePath
// Si no existPath es falso
if (!existPath) {
  console.log(".env file does not exist");
  process.exit(0);
}

// Carga variables de entorno al envConfig
envConfig = utils.parse(fs.readFileSync(envFilePath));

config["connection"]["dataBaseName"] = envConfig["DATABASE"];
config["connection"]["request"]["uri"] = "://" + envConfig["HOST"];
config["connection"]["request"]["port"] = envConfig["PORT"];
config["connection"]["prefix"] = envConfig["PREFIX"];

config["server"][0]["origin"] = envConfig["HOST"] + ":" + envConfig["PORT"];
config["prefix"] = envConfig["PREFIX"];

const isDevelopmentEnv = process.env.NODE_ENV === "producction";

// Comprueba si estamos en desarrollo
if (isDevelopmentEnv) {
  // Cargamos la congiruracion para produccion
  envConfig = {
    PORT: process.env.PORT,
  };

  config["connection"]["mongodbSrv"]["uri"] = envConfig["MONGOSRV"];
  config["connection"]["mongodbSrv"]["port"] = envConfig["PORTDATABASE"];
} else {
  config["connection"]["mongodbSrv"]["uri"] = "://" + envConfig["HOST"];
  config["connection"]["mongodbSrv"]["port"] = envConfig["PORTDATABASE"];
}