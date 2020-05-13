const express = require("express");
const handlers_ln =require("../lib/handlers/handlers_ln.js")
const controlador = express.Router()


<<<<<<< HEAD
controlador.get("/", handlers_ln.caretaInicial);

=======
controlador.get("/", handlers_ln.login);

controlador.get("/usuario", handlers_ln.usuario);

controlador.get("/admin", handlers_ln.administrador);
 
controlador.get("/base", handlers_ln.base);
  
>>>>>>> addb7f55d0275ebbc2780ca2c7f7932c2bfa7921

module.exports = controlador;