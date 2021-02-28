const mongoose = require("mongoose");
const config = require("./config");

// Variables de nombre
const database = config.connection.dataBaseName;
const conf = config.connection.request;
const URI = `mongodb${conf.uri}/`;
const protocol = URI + database;

// Coneccion a db
mongoose
  .connect(protocol, {
    useUnifiedTopology: true, // Correcion Server Discovery and Monitoring
    useNewUrlParser: true, // Correccion de parseo de string URL
  })
  .then((db) => console.log(`DB conect: ${protocol}`))
  .catch((err) => console.log(err));

module.exports = mongoose;