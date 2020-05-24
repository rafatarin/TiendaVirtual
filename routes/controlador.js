const express = require("express");
const handlers_ln = require("../lib/handlers/handlers_ln.js");
const controlador = express.Router();

controlador.get("/", handlers_ln.inicio);

controlador.get("/catalogo", handlers_ln.catalogo);

controlador.get("/usuario", handlers_ln.usuario);

controlador.get("/registro", handlers_ln.registro);

controlador.post("/registrado1", handlers_ln.nuevoUsuario1);

controlador.post("/registrado2", handlers_ln.nuevoUsuario2);

controlador.post("/registrado3", handlers_ln.nuevoUsuario3);

controlador.get("/salir", handlers_ln.logout);
controlador.get("/salir2", handlers_ln.logout2);

controlador.get("/login", handlers_ln.login);
controlador.get("/login2", handlers_ln.login2);

controlador.post("/login", handlers_ln.compruebaLoginUsuario);
controlador.post("/login2", handlers_ln.compruebaLoginAdmin);

//las rutas del administrador
controlador.get("/admin", handlers_ln.administrador);

controlador.get("/clientes", handlers_ln.clientes);

controlador.get("/estadisticas", handlers_ln.estadisticas);

controlador.get("/datos", handlers_ln.datos);

controlador.get("/datosGraf", handlers_ln.datosGraf);

controlador.get("/stock", handlers_ln.stock);

controlador.get("/buscaPorTexto/:texto", handlers_ln.buscaPorTexto);

controlador.put("/descripcion/:id_articulo", handlers_ln.descripcion);

controlador.get("/pedidosEnProceso", handlers_ln.pedidosEnProceso);

controlador.get("/pedidosEnviados", handlers_ln.pedidosEnviados);

controlador.put("/actualizaProceso/:id_pedido", handlers_ln.actualizaProceso);

controlador.put("/actualizaEnviados/:id_pedido", handlers_ln.actualizaEnviados);

module.exports = controlador;
