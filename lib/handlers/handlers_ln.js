const path = require("path");
const handlers_mod = require("./handlers_mod.js");

exports.inicio = async (req, res) => {
    let datos = await handlers_mod.inicio();
    res.sendFile("inicio.html", {
        root: path.join(__dirname + "../../../public/html"),
    });};

exports.articulos = async (req, res) => {
    let datos = await handlers_mod.inicio();
    res.render("catalogo", { secciones: datos });
};

exports.catalogo = async (req, res) => {
    let datos = await handlers_mod.catalogo();
    res.render("inicio", { secciones: datos });
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
        if (email[0].password == req.body.password) {
            req.session.user = req.body.email;
            console.log(req.session.user);
            res.redirect("/usuario");
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

exports.logout = async (req, res) => {
    res.redirect("/");
};

exports.logout2 = async (req, res) => {
    res.redirect("/");
};

//los pasos del administrador
exports.administrador = async (req, res) => {
    res.sendFile("admin.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
};

exports.base = async (req, res) => {
    let datos = await handlers_mod.base();
    res.render("clientes", { datos: datos });
};
exports.stock = async (req, res) => {
    let stock = await handlers_mod.stock();
    res.render("stock", { stock: stock });
};

exports.datos = async (req, res) => {
    let datos = await handlers_mod.datos();
    res.render("estadisticas", { datos: datos });
};

exports.estadisticas = async (req, res) => {
    res.sendFile("estadisticas.html", {
        root: path.join(__dirname + "../../../public/html"),
    });
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
