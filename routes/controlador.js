const express = require("express");
const handlers_ln =require("../lib/handlers/handlers_ln.js")
const controlador = express.Router()

controlador.get("/", handlers_ln.inicio);

controlador.get("/catalogo", handlers_ln.catalogo);

controlador.get("/usuario", handlers_ln.usuario);

controlador.get("/admin", handlers_ln.administrador);
 
controlador.get("/base", handlers_ln.base);

controlador.get("/registro", handlers_ln.registro)

controlador.post("/registro2", handlers_ln.registro2)

controlador.post("/registro3", handlers_ln.registro3)

controlador.post("/registro3", handlers_ln.nuevoUsuario);

controlador.get("/salir", handlers_ln.logout);
controlador.get("/salir2", handlers_ln.logout2);

controlador.get("/login", handlers_ln.login);
controlador.get("/login2", handlers_ln.login2);

controlador.post("/login", handlers_ln.compruebaLoginUsuario)
controlador.post("/login2", handlers_ln.compruebaLoginAdmin)


module.exports = controlador;