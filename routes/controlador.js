const express = require("express");
const handlers_ln = require("../lib/handlers/handlers_ln.js");
const controlador = express.Router();

controlador.get("/", handlers_ln.inicio);

controlador.get("/articulos/:name", handlers_ln.articulos);

controlador.get("/secciones", handlers_ln.secciones);

controlador.get("/usuario", handlers_ln.usuario);

controlador.get("/registro", handlers_ln.registro);

controlador.get("/identificacion", handlers_ln.mostrarIdentificador);

controlador.post("/registrado1", handlers_ln.nuevoUsuario1);

controlador.post("/registrado2", handlers_ln.nuevoUsuario2);

controlador.post("/registrado3", handlers_ln.nuevoUsuario3);

controlador.get("/usuarioRegistrado", handlers_ln.usuarioRegistrado)

controlador.get("/perfil", handlers_ln.mostrarPerfil);

controlador.post("/updatePerfil", handlers_ln.actualizarPerfil);

controlador.post("updatePerfil", handlers_ln.actualizarPerfil);

controlador.get("/salir", handlers_ln.logout);

//controlador.get("/login", handlers_ln.login);
//controlador.get("/login2", handlers_ln.login2);
controlador.get("/autenticador", handlers_ln.autenticador);

controlador.get("/anadir", handlers_ln.anadirPedido);

controlador.post("/login", handlers_ln.compruebaLoginUsuario);

controlador.get("/perfil/#password", handlers_ln.carrito);

controlador.post("/enviarMail", handlers_ln.enviarMail);

controlador.get("/historico", handlers_ln.historico);

//los del administrador
controlador.get("/admin", handlers_ln.loginAdmin);

controlador.get("/clientes", handlers_ln.clientes);

controlador.get("/estadisticas", handlers_ln.estadisticas);

controlador.get("/datos", handlers_ln.datos);

controlador.get("/datosGraf", handlers_ln.datosGraf);

controlador.get("/datosGraf2", handlers_ln.datosGraf2);

controlador.get("/datosGraf3", handlers_ln.datosGraf3);

controlador.get("/stock", handlers_ln.stock);

controlador.get("/buscaPorTexto/:texto", handlers_ln.buscaPorTexto);

controlador.get("/buscaUsuario/:texto", handlers_ln.buscaUsuario);

controlador.get("/buscaTodoUsuarios", handlers_ln.buscaTodoUsuarios);

controlador.get("/buscaTodoStock", handlers_ln.buscaTodoStock);

controlador.put("/descripcion/:id_articulo", handlers_ln.descripcion);

controlador.get("/pedidosEnProceso", handlers_ln.pedidosEnProceso);

controlador.get("/pedidosEnviados", handlers_ln.pedidosEnviados);

controlador.get("/detallePedido/:id_pedido", handlers_ln.detallePedido);

controlador.get("/detallePedidoEnv/:id_pedido", handlers_ln.detallePedidoEnv);

controlador.get("/imprimir/:id_pedido", handlers_ln.imprimir);

controlador.get("/historicoPedidos", handlers_ln.historicoPedidos);

controlador.put("/actualizaProceso/:id_pedido", handlers_ln.actualizaProceso);

controlador.put("/actualizaEnviados/:id_pedido", handlers_ln.actualizaEnviados);

controlador.get("/buscarCliente/:id_cliente", handlers_ln.buscarCliente);

controlador.put("/modificaDesc/:id_articulo", handlers_ln.modificaDesc);

controlador.put("/modificaStock/:id_articulo", handlers_ln.modificaStock);

controlador.put("/modificaPrecio/:id_articulo", handlers_ln.modificaPrecio);

controlador.post("/modificaCategoria/:id_articulo", handlers_ln.modificaCategoria);

controlador.get("/imagenUltima", handlers_ln.imagenUltima);

controlador.post("/crearArticulo", handlers_ln.crearArticulo);

controlador.post("/uploadArticulo", handlers_ln.modificaImagen)

controlador.post("/upload", handlers_ln.actualizarAvatar)

controlador.get("/imprimirPDF", handlers_ln.generarPDF);

controlador.post("/eliminarCuenta", handlers_ln.eliminarCuenta);

controlador.post("/pedidosGuardados/:id", handlers_ln.guardarArticulos);

controlador.get("/articulosGuardados", handlers_ln.articulosGuardados)

controlador.get("/misArticulos", handlers_ln.guardarArticulos);

controlador.get("/facturacion", handlers_ln.facturacion)

controlador.get("/carrito", handlers_ln.articulosGuardados);




// controlador.put("/seleccionaCantidad/:id_pedido", handlers_ln.seleccionaCantidad)

module.exports = controlador;
