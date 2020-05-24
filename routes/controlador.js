const express = require("express");
const handlers_ln = require("../lib/handlers/handlers_ln.js");
const controlador = express.Router();

controlador.get("/", handlers_ln.inicio);

controlador.get("/articulos", handlers_ln.articulos)

controlador.get("/secciones", handlers_ln.secciones);

controlador.get("/usuario", handlers_ln.usuario);

controlador.get("/registro", handlers_ln.registro);

controlador.get("/identificacion", handlers_ln.mostrarIdentificador);

controlador.post("/registrado1", handlers_ln.nuevoUsuario1);

controlador.post("/registrado2", handlers_ln.nuevoUsuario2);

controlador.post("/registrado3", handlers_ln.nuevoUsuario3);

controlador.post("/enviarContacto", handlers_ln.enviarContacto);

controlador.get("/perfil", handlers_ln.mostrarPerfil);

controlador.post("/updatePerfil", handlers_ln.actualizarPerfil)

controlador.post("updatePerfil", handlers_ln.actualizarPerfil)

controlador.get("/salir", handlers_ln.logout);

//controlador.get("/login", handlers_ln.login);
//controlador.get("/login2", handlers_ln.login2);

controlador.post("/login", handlers_ln.compruebaLoginUsuario);
controlador.post("/login2", handlers_ln.compruebaLoginAdmin);

//las rutas del administrador
controlador.get("/admin", handlers_ln.administrador);

controlador.get("/clientes", handlers_ln.clientes);

controlador.get("/estadisticas", handlers_ln.estadisticas);

controlador.get("/datos", handlers_ln.datos);

controlador.get("/datosGraf", handlers_ln.datosGraf);

controlador.get("/stock", handlers_ln.stock);

<<<<<<< HEAD
controlador.get("/anadir", handlers_ln.anadirPedido);

controlador.get("/historico", handlers_ln.historico);

=======
<<<<<<< HEAD
controlador.get("/buscaPorTexto/:texto", handlers_ln.buscaPorTexto);

controlador.put("/descripcion/:id_articulo", handlers_ln.descripcion);

controlador.get("/pedidosEnProceso", handlers_ln.pedidosEnProceso);

controlador.get("/pedidosEnviados", handlers_ln.pedidosEnviados);

controlador.put("/actualizaProceso/:id_pedido", handlers_ln.actualizaProceso);

controlador.put("/actualizaEnviados/:id_pedido", handlers_ln.actualizaEnviados);
=======
controlador.get("/carrito", handlers_ln.carrito)
>>>>>>> 051ba48c92c1522a9a3a52df64ad2b86de58e3f8
>>>>>>> 3189a3ec9494447bf2d03c564002a7f88a1290df

module.exports = controlador;
