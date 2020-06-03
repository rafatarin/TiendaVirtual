const path = require("path");
const handlers_mod = require("./handlers_mod.js");
var nodemailer = require("nodemailer");




exports.actualizarAvatar = async (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    console.log('req.files >>>', req.files); // eslint-disable-line

    sampleFile = req.files.sampleFile;

    uploadPath = path.join(__dirname, '/../../public/uploads/') + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.render('perfil', {
            imagenAvatar: sampleFile.name
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
    console.log(arrayRegistro);
    let clientes = await handlers_mod.mostrarUsuarios();
    for (i = 0; i < clientes.length; i++) {
        if (clientes[i].email != arrayRegistro[2][0]) {
            await handlers_mod.registrarUsuario(arrayRegistro);
            res.sendFile("identificacion.html", {
                root: path.join(__dirname + "../../../public/html"),
            });
        }
    }
};

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
    let identificado = `Identificado: ${req.session.user}`;
    let usuario = await handlers_mod.mostrarPerfil(req.session.user);
    res.render("perfil", {
        usuario: usuario,
        identificado: identificado,
    });
};

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
        req.session.user = email[0].usuario;
          res.render("admin", {
        layout: "admin"});      
          
    } else if ((email[0].password == req.body.contraseña) && (email[0].rol == "cliente")) {
        req.session.user = email[0].usuario;
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

exports.carrito = async (req, res) => {
    if (!req.session.user) {
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    } else {
        res.render("perfil")

    }
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
        layout: "admin"});        
}

exports.stock = async (req, res) => {
    res.sendFile("stock.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};



exports.pedidosEnProceso = async (req, res) => {
    let enProceso = await handlers_mod.pedidosEnProceso();
    console.log(enProceso);
    res.render("pedidosEnProceso", {
        layout: "admin",
        enProceso: enProceso,
        mensaje: "Este pedido pasa a estar en la vista pedidos Enviados",
    });
};
exports.pedidosEnviados = async (req, res) => {
    let enviados = await handlers_mod.pedidosEnviados();
    res.render("pedidosEnviados", {
        layout: "admin",
        enviados: enviados,
        mensaje: "Este pedido pasa a estar en la vista Histórico Pedidos",
    });
};

exports.historicoPedidos = async (req, res) => {
    let historicoPedidos = await handlers_mod.historicoPedidos();
    res.render("historico", {
        layout: "admin",
        historicoPedidos: historicoPedidos,
    });
};
exports.datos = async (req, res) => {
    let datos = await handlers_mod.datos();
    res.render("estadisticas", {
        layout: "admin",
        datos: datos
    });
};

exports.datosGraf = async (req, res) => {
    let datosGraf = await handlers_mod.datosGraf();
    res.json(datosGraf);
};

exports.datosGraf2 = async (req, res) => {
    let datosGraf2 = await handlers_mod.datosGraf2();
    res.json(datosGraf2);
};

exports.estadisticas = async (req, res) => {
    res.sendFile("estadisticas.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
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
    res.render("detalle_cliente", {
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

exports.generarPDF = async (req, res) => {
    const PDFDocument = require('pdfkit');
    var myDoc = new PDFDocument({bufferPages: true});

    let buffers = [];
    myDoc.on('data', buffers.push.bind(buffers));
    myDoc.on('end', () => {

    let pdfData = Buffer.concat(buffers);
    res.writeHead(200, {
    'Content-Length': Buffer.byteLength(pdfData),
    'Content-Type': 'application/pdf',
    'Content-disposition': 'attachment;filename=test.pdf',})
    .end(pdfData);

});

myDoc.font('Times-Roman')
     .fontSize(12)
     .text(`this is a test text`);
myDoc.end();
};


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