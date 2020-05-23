const path = require("path");
const handlers_mod = require("./handlers_mod.js");
var nodemailer = require('nodemailer');


exports.inicio = async (req, res) => {
    if(req.session.user){
        let identificado = `Identificado: ${req.session.user}`;
        let hidden = "hidden"
        res.render("inicio", {identificado: identificado, btn_hidden: hidden});
    } else{
        let identificado = "none";
        let btn_hidden = "none";
        res.render("inicio", {identificado: identificado, btn_hidden: btn_hidden});
}
};

exports.secciones = async (req, res) => {
    if(req.session.user){
        let identificado = `Identificado: ${req.session.user}`;
        let hidden = "hidden"
        var secciones = [{seccion: "ropa deportiva"}, {seccion: "zapatillas"},{seccion: "joyeria"},{seccion: "juguetes"}, {seccion: "libros"}]
        res.render("secciones", {secciones: secciones, identificado: identificado, btn_hidden: hidden});
    } else{
        var secciones = [{seccion: "ropa deportiva"}, {seccion: "zapatillas"},{seccion: "joyeria"},{seccion: "juguetes"}, {seccion: "libros"}]
        res.render("secciones", {
         secciones: secciones
    });
}
};

exports.articulos = async (req, res) => {
    let datos = await handlers_mod.articulos();
    if(req.session.user){
        let identificado = `Identificado: ${req.session.user}`;
        let hidden = "hidden"
    res.render("articulos", {secciones: datos, identificado: identificado, btn_hidden: hidden});
    } else  {
        res.render("articulos", {secciones: datos});
    }
};

exports.usuario = async (req, res) => {
    res.sendFile("usuario.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.registro = async (req, res) => {
    res.sendFile("registro.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.mostrarIdentificador = async (req, res) => {
    res.sendFile("identificacion.html", {
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
    await handlers_mod.usuarioRegistrado(arrayRegistro);
    res.send("GRACIAS");
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

exports.compruebaLoginUsuario = async (req, res) => {
    var email = await handlers_mod.consultaLogin(req.body.email);
    if (email.length > 0) {
        if (email[0].password == req.body.contraseña) {
            req.session.user = email[0].usuario;
            console.log(req.session.user);
            let identificado = `Identificado: ${req.session.user}`;
            let hidden = "hidden";
            res.render("inicio", {identificado: identificado, btn_hidden: hidden})
            } else {
            res.sendFile("loginIncorrect.html", {
                root: path.join(__dirname + "../../../public/html"),
            });
        }
    } else {
        res.sendFile("loginIncorrect.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
};

exports.compruebaLoginAdmin = async (req, res) => {
    var email = await handlers_mod.consultaLoginAdmin(req.body.email);

    if (email.length > 0) {
        if (email[0].password == req.body.password) {
            req.session.user = req.body.email;
            console.log(req.session.user);
            res.redirect("/admin");
        } else {
            res.sendFile("loginIncorrect2.html", {
                root: path.join(__dirname + "../../../public/html"),
            });
        }
    } else {
        res.sendFile("loginIncorrect2.html", {
            root: path.join(__dirname + "../../../public/html"),
        });
    }
};

exports.carrito = async (req,res)=>{
    if(req.session.user){


    } else{
        res.sendFile("identificacion.html", {
            root: path.join(__dirname + "../../../public/html"),
        });    }
}


exports.logout = async (req, res) => {
    req.session.destroy();
    res.render("inicio");
}


//los pasos del administrador
exports.administrador = async (req, res) => {
    res.sendFile("admin.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.base = async (req, res) => {
    let datos = await handlers_mod.base();
    res.render("clientes", {
        datos: datos
    });
};
exports.stock = async (req, res) => {
    let stock = await handlers_mod.stock();
    res.render("stock", {
        stock: stock
    });
};

exports.datos = async (req, res) => {
    let datos = await handlers_mod.datos();
    res.render("estadisticas", {
        datos: datos
    });
};

exports.estadisticas = async (req, res) => {
    res.sendFile("estadisticas.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.enviarContacto = (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'saluspedidos@gmail.com',
            pass: 'webSALUS2020'
        }
    });
    var mailOptions = {
        from: 'remitente',
        to: `${req.body.email}`,
        subject: `${req.body.asunto}`,
        text: `${req.body.mensaje}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email Enviado");
            res.status(200).jsonp(req.body);
        }
    });
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