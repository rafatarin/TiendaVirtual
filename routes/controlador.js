const express = require("express");
const handlers_ln =require("../lib/handlers/handlers_ln.js")
const controlador = express.Router()


controlador.get("/", handlers_ln.login);

controlador.get("/usuario", handlers_ln.usuario);

controlador.get("/admin", handlers_ln.administrador);
 
controlador.get("/base", handlers_ln.base);
  

module.exports = controlador;