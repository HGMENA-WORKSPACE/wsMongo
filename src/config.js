// Configuracion del proyecto
module.exports = {
  dirname: "",
  routes: [],
  controllers: [],
  connection: {
    prefix: "",
    dataBaseName: "",
    request: {
      uri: "",
      port: 0,
    },
    mongodbSrv: {
      uri: "",
      port: 0,
    },
  },
  server: [{
    origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
    credentials: true,
  }, ],
};