const express = require("express");
const handlers_ln =require("../lib/handlers/handlers_ln.js")
const controlador = express.Router()


controlador.get("/", handlers_ln.caretaInicial);


module.exports = controlador;