const path = require("path");
const handlers_mod = require("./handlers_mod.js");
var nodemailer = require("nodemailer");


exports.actualizarAvatar = async (req, res) => {
    let sampleFile;
    let uploadPath;
    let identificado = `Bienvenido: ${req.session.user}`;
    let usuario = await handlers_mod.mostrarPerfil(req.session.user);

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    console.log('req.files >>>', req.files); // eslint-disable-line

    sampleFile = req.files.sampleFile;
    name = `${req.session.user}`;

    uploadPath = path.join(__dirname, '/../../public/img/') + name;

    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('datosPersonales', {
            usuario: usuario,
            imagenAvatar: `${req.session.user}`,
            identificado: identificado,
        });
    });

};




exports.enviarMail = function (req, res) {
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "pedidos.salus@gmail.com",
            pass: "webSALUS2020",
        },
    });
    // Definimos el email
    console.log(req.body.email);
    var mailOptions = {
        from: `${req.body.email}`,
        to: "pedidos.salus@gmail.com",
        subject: `${req.body.asunto}`,
        text: `${req.body.mensaje}`,
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, error.message);
        } else {
            console.log("Email sent");
            res.redirect("/");
        }
    });
    // Definimos el email
    console.log(req.body.email)
    var mailOptions = {
        from: `${req.body.email}`,
        to: "pedidos.salus@gmail.com",
        subject: `${req.body.asunto}`,
        text: `${req.body.mensaje}`
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, error.message);
        } else {
            console.log("Email sent");
            res.redirect("/")
        }
    });
};

exports.inicio = async (req, res) => {
    let categorias = await handlers_mod.categorias();
    if (!req.session.user) {
        let visible = "visible";
        res.render("inicio", {
            btn_hidden: visible,
            secciones: categorias,
            name: categorias,
        });
    } else {
        let identificado = `Bienvenido: ${req.session.user}`;
        res.render("inicio", {
            identificado: identificado,
            secciones: categorias,
        });
    }
};

exports.secciones = async (req, res) => {

    let categorias = await handlers_mod.categorias();

    if (!req.session.user) {
        let visible = "visible";
        res.render("secciones", {
            secciones: categorias,
            btn_hidden: visible,
            name: categorias,
        });
    } else {
        let identificado = `Identificado: ${req.session.user}`;
        res.render("secciones", {
            secciones: categorias,
            identificado: identificado,
        });
    }
};

exports.anadirPedido = async (req, res) => {
    if (req.session.user) {
        let datos = await handlers_mod.anadirPedido();
        res.render("añadirPedido", {
            registros: datos,
            layout: false
        });
    } else {
        res.send("si no estas logeado, no puedes añadir");
    }
};

exports.historico = async (req, res) => {
    if (req.session.user) {
        let datos = await handlers_mod.historico();
        res.render("historico", {
            registros: datos,
            layout: false
        });
    } else {
        res.send("si no estas logeado, no puedes ver el historico");
    }
};

exports.articulos = async (req, res) => {

    let datos = await handlers_mod.articulos(req.params.name);
    if (!req.session.user) {
        let visible = "visible";
        res.render("articulos", {
            secciones: datos,
            btn_hidden: visible,
        });
    } else {
        let identificado = `Bienvenido: ${req.session.user}`;
        res.render("articulos", {
            secciones: datos,
            identificado: identificado,
        });
    }
};

exports.usuario = async (req, res) => {
    res.sendFile("usuario.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.mostrarIdentificador = async (req, res) => {
    res.sendFile("identificacion.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.registro = async (req, res) => {
    res.sendFile("registro.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.registro2 = async (req, res) => {
    res.sendFile("registro2.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.registro3 = async (req, res) => {
    res.sendFile("registro3.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

var arrayRegistro = [];
exports.nuevoUsuario1 = async (req, res) => {
    arrayRegistro.push(req.body.campos);
    res.sendFile("registro2.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.nuevoUsuario2 = async (req, res) => {
    arrayRegistro.push(req.body.campos);
    res.sendFile("registro3.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.nuevoUsuario3 = async (req, res) => {

    arrayRegistro.push(req.body.campos);
    let clientes = await handlers_mod.mostrarUsuarios();
    for (i = 0; i < clientes.length; i++) {
        if (clientes[i].email != arrayRegistro[2][0]) {
            res.sendFile("comprobarSMS.html", {
                root: path.join(__dirname + "../../../public/html"),
            });
        }
    }
};

exports.usuarioRegistrado = async (req, res) => {
    console.log(arrayRegistro)
    await handlers_mod.registrarUsuario(arrayRegistro);
    res.sendFile("identificacion.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
}


exports.login = async (req, res) => {
    res.sendFile("login.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.login2 = async (req, res) => {
    res.sendFile("login2.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.mostrarPerfil = async (req, res) => {
    let identificado = `Bienvenido: ${req.session.user}`;
    let usuario = await handlers_mod.mostrarPerfil(req.session.user);
    res.render("datosPersonales", {
        usuario: usuario,
        imagenAvatar: `${req.session.user}`,
        identificado: identificado,
    })

}


exports.facturacion = async (req, res) => {
    let identificado = `Bienvenido: ${req.session.user}`;
    let usuario = await handlers_mod.mostrarPerfil(req.session.user);
    let facturas = await handlers_mod.facturacion(req.session.user2);
    let fechaString = String(facturas[0].fecha_pedido);
    let fecha = fechaString.substr(-50, 16);
    var sumaPrecio = 0;
    var precioCantidad = [];
    for (i = 0; i < facturas.length; i++) {
        precioCantidad.push(facturas[i].cantidad * facturas[i].precio);
        sumaPrecio = sumaPrecio + precioCantidad[i];
        precioIVA = sumaPrecio * 0.21;
        totalFactura = precioIVA + sumaPrecio;
    }
    res.render("facturacion", {
        usuario: usuario,
        imagenAvatar: `${req.session.user}.jpg`,
        identificado: identificado,
        facturas: facturas,
        email: facturas[0].email,
        usuario: facturas[0].usuario,
        pedido: facturas[0].id_pedido,
        nombre: facturas[0].nombre,
        apellido1: facturas[0].apellido1,
        apellido2: facturas[0].apellido2,
        direccion: facturas[0].direccion,
        fecha: fecha,
        direccion: facturas[0].poblacion,
        precioCantidad: precioCantidad,
        sumaPrecio: sumaPrecio.toFixed(2),
        precioIVA: precioIVA.toFixed(2),
        totalFactura: totalFactura.toFixed(2),
    });
};

var arrayGuardados = [];
var cantidad = [];
exports.misArticulos = async (req, res) => {
    cantidad.push(req.query.quantity)
    arrayArticulos = await handlers_mod.guardarArticulos(req.query.product)
    arrayGuardados.push(arrayArticulos[0])
   
}


exports.carrito = async (req,    res) => {
    console.log(arrayGuardados)
    var identificado = `Bienvenido: ${req.session.user}`;
    var usuario = await handlers_mod.mostrarPerfil(req.session.user);
    if (req.session.user) {
        res.render("articulosGuardados", {
            usuario: usuario,
            identificado: identificado,
            datosGuardados: arrayGuardados,
            
        });

    } else {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }

}

exports.actualizarPerfil = async (req, res) => {
    var arrayCamposPerfil = [];
    let identificado = `Identificado: ${req.session.user}`;
    arrayCamposPerfil.push(req.body.updateCampos);
    await handlers_mod.actualizarPerfil(arrayCamposPerfil, req.session.user);
    let usuario = await handlers_mod.mostrarPerfil(req.session.user);
    res.render("perfil", {
        usuario: usuario,
        identificado: identificado,
    });
};

exports.compruebaLoginUsuario = async (req, res) => {
    var email = await handlers_mod.consultaLogin(req.body.email);
    if (email[0] == undefined) {
        res.sendFile("loginIncorrect.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
    if ((email[0].password == req.body.contraseña) && (email[0].rol == "admin")) {
        req.session.admin = email[0].usuario;
        res.render("admin", {
            layout: "admin"
        });

    } else if ((email[0].password == req.body.contraseña) && (email[0].rol == "cliente")) {
        req.session.user = email[0].usuario;
        req.session.user2 = email[0].email;
        let identificado = `Bienvenido: ${req.session.user}`;
        res.render("inicio", {
            identificado: identificado,
        });

    } else {
        res.sendFile("loginIncorrect.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
}

exports.autenticador = async (req, res) => {
    res.render("autenticado");
};



exports.logout = async (req, res) => {
    req.session = null;
    let visible = "visible";
    res.render("inicio", {
        btn_hidden: visible,
    });
};



//los pasos del administrador
exports.administrador = (req, res) => {
    res.render("admin", {
        layout: "admin"
    });
}

exports.loginAdmin = (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        res.render("admin", {
            layout: "admin"
        });
    }
}

exports.stock = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        res.sendFile("stock.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
}

exports.clientes = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
            res.sendFile("clientes.html", {
                root: path.join(__dirname + "../../../public/html"),
            });

        }
    }

exports.pedidosEnProceso = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let enProceso = await handlers_mod.pedidosEnProceso();
        console.log(enProceso);
        res.render("pedidosEnProceso", {
            layout: "admin",
            enProceso: enProceso,
            mensaje: "Este pedido pasa a estar en la vista pedidos Enviados",
        });
    };
}

exports.detallePedido = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let detallePedido = await handlers_mod.detallePedido(req.params.id_pedido);
        console.log(detallePedido)
        let totalPedido = await handlers_mod.detallePedido(req.params.id_pedido);
        let sumaPrecio = 0;
        let precioCantidad = [];
        for (i = 0; i < totalPedido.length; i++) {
        precioCantidad.push(totalPedido[i].cantidad * totalPedido[i].precio);
        sumaPrecio = sumaPrecio + precioCantidad[i];
        precioIVA = sumaPrecio * 0.21;
        totalFactura = precioIVA + sumaPrecio;
    }
        res.render("detallePedido", {
            layout: "admin",
            detallePedido: detallePedido,
            precioCantidad: precioCantidad,
            sumaPrecio: sumaPrecio.toFixed(2),
            totalFactura: totalFactura.toFixed(2),
            precioIVA: precioIVA.toFixed(2),            
        });
    };
}
exports.detallePedidoEnv = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let detallePedido = await handlers_mod.detallePedidoEnv(req.params.id_pedido);
        console.log(detallePedido)
        let totalPedido = await handlers_mod.detallePedidoEnv(req.params.id_pedido);
        let sumaPrecio = 0;
        let precioCantidad = [];
        for (i = 0; i < totalPedido.length; i++) {
        precioCantidad.push(totalPedido[i].cantidad * totalPedido[i].precio);
        sumaPrecio = sumaPrecio + precioCantidad[i];
        precioIVA = sumaPrecio * 0.21;
        totalFactura = precioIVA + sumaPrecio;
    }
        res.render("detallePedido", {
            layout: "admin",
            detallePedido: detallePedido,
            precioCantidad: precioCantidad,
            sumaPrecio: sumaPrecio.toFixed(2),
            totalFactura: totalFactura.toFixed(2),
            precioIVA: precioIVA.toFixed(2),            
        });
    };
}

exports.imprimir = async (req, res) => {
    let facturas = await handlers_mod.imprimir(req.params.id_pedido);
    console.log(facturas)
    let fechaString = String(facturas[0].fecha_pedido);
    let fecha = fechaString.substr(-50, 16);
    var sumaPrecio = 0;
    var precioCantidad = [];
    for (i = 0; i < facturas.length; i++) {
        precioCantidad.push(facturas[i].cantidad * facturas[i].precio);
        sumaPrecio = sumaPrecio + precioCantidad[i];
        precioIVA = sumaPrecio * 0.21;
        totalFactura = precioIVA + sumaPrecio;
    }
    'use strict'

    let pdf = require('handlebars-pdf')
    let document = {
        template: '<div class="container row"> {{#if facturas}} <div class="col-12 text-center">' +
            '<h1><strong> PEDIDOS SALUS</strong></h1> </div><div class="col-6 mt-4 mr-5 text-left">' +
            'Adreça: Carrer del Pintor Vergara, 3, <br> 12004 Castelló de la Plana, Castelló </div>' +
            '<div class="col-5 ml-4 mt-4 "> <img src="../img/logo.png" alt="" class="w-50"> </div><div class="col-4 mt-5"><h5>Facturar a:</h5><div>' +
            '{{nombre}} {{apellido1}} {{apellido2}}  </div>  <div> {{direccion}} </div>  </div> <div class="col-4 mt-5">' +
            '<h5>Enviar a:</h5> <div>  {{nombre}} {{apellido1}} {{apellido2}}</div><div>{{direccion}}</div> </div><div class="col-4 mt-5">' +
            '<div class="col-8"><strong> Nº de pedido:</strong> {{pedido}} </div><div class="col-8"><strong> Fecha: </strong> {{fecha}}</div> </div><div> <table class="row mt-5 ml-3"><tr>' +
            '<td class="apartadoFactura col">CANTIDAD</td><td class="apartadoDescripcion col">DESCRIPCIÓN</td><td class="apartadoFactura col">PRECIO UNITARIO</TD><td class="apartadoFactura col">IMPORTE</td>' +
            '</tr> {{#each facturas}} <tr> <td class="apartadoFactura">{{cantidad}}</td><td class="apartadoFactura">{{descripcion}} €</td> <td class="apartadoFactura">{{precio}} €</td> <td class="apartadoFactura">{{precioCantidad}} €</td></tr>{{/each}}' +
            '</table> <div class="resultados ">SubTotal:</div> <div class="resultadosCantidad"> {{sumaPrecio}} €</div> <div class="resultados">IVA 21%:</div> <div class="resultadosCantidad"> {{precioIVA}} €</div><div class="resultados">TOTAL:</div> <div class="resultadosCantidad mb-5"> {{totalFactura}} €</div>' +
            '</div>{{/if}} </div> </div>',
        context: {
            facturas: facturas,
            email: facturas[0].email,
            usuario: facturas[0].usuario,
            pedido: facturas[0].id_pedido,
            nombre: facturas[0].nombre,
            apellido1: facturas[0].apellido1,
            apellido2: facturas[0].apellido2,
            direccion: facturas[0].direccion,
            fecha: fecha,
            direccion: facturas[0].poblacion,
            precioCantidad: precioCantidad,
            sumaPrecio: sumaPrecio.toFixed(2),
            precioIVA: precioIVA.toFixed(2),
            totalFactura: totalFactura.toFixed(2),

        },
        path: "./public/pdfs/" + req.params.id_pedido + ".pdf"
}
    pdf.create(document)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    })
    res.render("pdfPedido", {
            layout: "admin",
            pedido: req.params.id_pedido,
  
            
        });
    };

exports.pedidosEnviados = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let enviados = await handlers_mod.pedidosEnviados();
        res.render("pedidosEnviados", {
            layout: "admin",
            enviados: enviados,
            mensaje: "Este pedido pasa a estar en la vista Histórico Pedidos",
        });
    };
}
exports.historicoPedidos = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let historicoPedidos = await handlers_mod.historicoPedidos();
        res.render("historico", {
            layout: "admin",
            historicoPedidos: historicoPedidos,
        });
    };
}
exports.datos = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let datos = await handlers_mod.datos();
        res.render("estadisticas", {
            layout: "admin",
            datos: datos
        });
    };
}
exports.datosGraf = async (req, res) => {
    let datosGraf = await handlers_mod.datosGraf();
    res.json(datosGraf);
};

exports.datosGraf2 = async (req, res) => {
    let datosGraf2 = await handlers_mod.datosGraf2();
    res.json(datosGraf2);
};

exports.datosGraf3 = async (req, res) => {
    let datosGraf3 = await handlers_mod.datosGraf3();
    res.json(datosGraf3);
};

exports.estadisticas = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        res.sendFile("estadisticas.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
};


exports.descripcion = async (req, res) => {
    let resultado = await handlers_mod.descripcion(req.params.id_articulo);
    res.json(resultado);
};

exports.buscaPorTexto = async (req, res) => {
    let stock = await handlers_mod.buscaPorTexto(req.params.texto);
    res.json(stock);
};

exports.buscaUsuario = async (req, res) => {
    let clientes = await handlers_mod.buscaUsuario(req.params.texto);
    res.json(clientes);
};

exports.buscaTodoUsuarios = async (req, res) => {
    let clientes = await handlers_mod.buscaTodoUsuarios();
    res.json(clientes);
};
exports.buscaTodoStock = async (req, res) => {
    let datos = await handlers_mod.buscaTodoStock();
    res.json(datos);
};

exports.actualizaProceso = async (req, res) => {
    let enProceso = await handlers_mod.actualizaProceso(req.params.id_pedido);
    res.json(enProceso);
};

exports.buscarCliente = async (req, res) => {
    let datosCliente = await handlers_mod.buscarCliente(req.params.id_cliente);
    res.render("cliente", {
        layout: "admin",
        datosCliente: datosCliente,
    });
};

exports.actualizaEnviados = async (req, res) => {
    let actEnviados = await handlers_mod.actualizaEnviados(
        req.params.id_pedido
    );
    res.json(actEnviados);
};

exports.modificaDesc = async (req, res) => {
    let descripcion = await handlers_mod.modificaDesc(req.body.descripcion, req.params.id_articulo);
    res.json(descripcion);
};

exports.modificaStock = async (req, res) => {
    let stock = await handlers_mod.modificaStock(req.body.stock, req.params.id_articulo);
    res.json(stock);
};

exports.modificaPrecio = async (req, res) => {
    let precio = await handlers_mod.modificaPrecio(req.body.precio, req.params.id_articulo);
    res.json(precio);
};
exports.modificaCategoria = async (req, res) => {
    let categoria = await handlers_mod.modificaCategoria(req.body.categoria, req.params.id_articulo);
    res.json(categoria);
};

exports.modificaImagen = async (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    sampleFile = req.files.sampleFile;

    uploadPath = path.join(__dirname, '/../../public/img/') + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);

        }
        res.sendFile("stock.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    });

}

exports.imagenUltima = async (req, res) => {
    if (!req.session.admin) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        let imagenUltima = await handlers_mod.imagenUltima();
        res.render("crearArticulo", {
            layout: "admin",
            imagenUltima: imagenUltima,
        });
    };
}

exports.crearArticulo = async (req, res) => {
    let articuloNew = await handlers_mod.creaArticulo(req.body.descripcion, req.body.categoria, req.body.stock, req.body.precio, req.body.imagen);
    console.log(articuloNew);
    res.redirect(`/stock/#${req.body.imagen}`)
};

exports.generarPDF = async (req, res) => {
    let facturas = await handlers_mod.facturacion(req.session.user2);
    let fechaString = String(facturas[0].fecha_pedido);
    let fecha = fechaString.substr(-50, 16);
    var sumaPrecio = 0;
    var precioCantidad = [];
    for (i = 0; i < facturas.length; i++) {
        precioCantidad.push(facturas[i].cantidad * facturas[i].precio);
        sumaPrecio = sumaPrecio + precioCantidad[i];
        precioIVA = sumaPrecio * 0.21;
        totalFactura = precioIVA + sumaPrecio;
    }
    'use strict'

    let pdf = require('handlebars-pdf')
    let document = {
        template: '<div class="container row"> {{#if facturas}} <div class="col-12 text-center">' +
            '<h1><strong> PEDIDOS SALUS</strong></h1> </div><div class="col-6 mt-4 mr-5 text-left">' +
            'Adreça: Carrer del Pintor Vergara, 3, <br> 12004 Castelló de la Plana, Castelló </div>' +
            '<div class="col-5 ml-4 mt-4 "> <img src="../img/logo.png" alt="" class="w-50"> </div><div class="col-4 mt-5"><h5>Facturar a:</h5><div>' +
            '{{nombre}} {{apellido1}} {{apellido2}}  </div>  <div> {{direccion}} </div>  </div> <div class="col-4 mt-5">' +
            '<h5>Enviar a:</h5> <div>  {{nombre}} {{apellido1}} {{apellido2}}</div><div>{{direccion}}</div> </div><div class="col-4 mt-5">' +
            '<div class="col-8"><strong> Nº de pedido:</strong> {{pedido}} </div><div class="col-8"><strong> Fecha: </strong> {{fecha}}</div> </div><div> <table class="row mt-5 ml-3"><tr>' +
            '<td class="apartadoFactura col">CANTIDAD</td><td class="apartadoDescripcion col">DESCRIPCIÓN</td><td class="apartadoFactura col">PRECIO UNITARIO</TD><td class="apartadoFactura col">IMPORTE</td>' +
            '</tr> {{#each facturas}} <tr> <td class="apartadoFactura">{{cantidad}}</td><td class="apartadoFactura">{{descripcion}} €</td> <td class="apartadoFactura">{{precio}} €</td> <td class="apartadoFactura">{{precioCantidad}} €</td></tr>{{/each}}' +
            '</table> <div class="resultados ">SubTotal:</div> <div class="resultadosCantidad"> {{sumaPrecio}} €</div> <div class="resultados">IVA 21%:</div> <div class="resultadosCantidad"> {{precioIVA}} €</div><div class="resultados">TOTAL:</div> <div class="resultadosCantidad mb-5"> {{totalFactura}} €</div>' +
            '</div>{{/if}} </div> </div>',
        context: {
            facturas: facturas,
            email: facturas[0].email,
            usuario: facturas[0].usuario,
            pedido: facturas[0].id_pedido,
            nombre: facturas[0].nombre,
            apellido1: facturas[0].apellido1,
            apellido2: facturas[0].apellido2,
            direccion: facturas[0].direccion,
            fecha: fecha,
            direccion: facturas[0].poblacion,
            precioCantidad: precioCantidad,
            sumaPrecio: sumaPrecio.toFixed(2),
            precioIVA: precioIVA.toFixed(2),
            totalFactura: totalFactura.toFixed(2),

        },
        path: "./public/pdfs/" + req.session.user + ".pdf"
    }

    pdf.create(document)
    var fs = require("fs");

    var file = fs.createReadStream(path.join(__dirname, '../../public/pdfs/' + req.session.user + '.pdf'));
    var stat = fs.statSync(path.join(__dirname, '../../public/pdfs/' + req.session.user + '.pdf'));
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename= factura-' + req.session.user + '.pdf');
    file.pipe(res);

};


var arrayGuardados = [];
var cantidad = []
exports.guardarArticulos = async (req, res) => {
    console.log(req.query.quantity)
    if (req.session.user) {
        resultadoArticulos = await handlers_mod.guardarArticulos(req.query.product);
        arrayGuardados.push(resultadoArticulos[0]);
        cantidad.push(req.query.quantity);
    } else {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
}


exports.articulosGuardados = async (req, res) => {
    let identificado = `Bienvenido: ${req.session.user}`;
    let usuario = await handlers_mod.mostrarPerfil(req.session.user);
    var cantidad = req.params.id;
    console.log(cantidad)

    res.render("articulosGuardados", {
        usuario: usuario,
        identificado: identificado,
        cantidad: cantidad,
        datosGuardados: arrayGuardados
    });
}

exports.eliminarCuenta = async (req, res) => {
    var cliente = await handlers_mod.consultaLogin(req.body.correoElimina);
    if (cliente[0].email == req.body.correoElimina && cliente[0].password == req.body.passwordElimina) {
        let datos = await handlers_mod.eliminarCuenta(req.body.correoElimina, req.body.passwordElimina)

    } else {
        res.send("Su email o contraseña no es correcto! No está autorizado a eliminar la cuenta.")
    }
}

exports.error404 = (req, res) => {
    let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${
        req.path
    }`;
    res.status(404);
    res.render("404", {
        url: url,
    });
};

exports.error500 = (req, res) => {
    res.status(500);
    res.render("500", {
        error: err.message,
    });
};
