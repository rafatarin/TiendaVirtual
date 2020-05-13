const path = require("path");
const handlers_mod = require("./handlers_mod.js");


exports.caretaInicial = (req, res) => {
    var producto1 = {
        img: "chancla",
        descripcion: "Arizona. Birko-Flor Nubuck",
        precio: 19.95,
        logo: "cesta"
    };
    var producto2 = {
        img: "chancleta",
        descripcion: "Chanclas negras de dedo para hombre",
        precio: 12.95,
        logo: "cesta"
    };


    var todosProductos = [];
    for (i = 0; i < 20; i++) {
        todosProductos.push(producto1);
        todosProductos.push(producto2)
    }
    
    res.render("caretaInicial", {
       todosProductos: todosProductos,
    })
}

exports.usuario = async (req,res) =>{
	  res.sendFile("usuario.html", {root: path.join(__dirname + "../../../public/html")})
}

exports.administrador = async (req, res) => {
	res.sendFile("admin.html", {
		root: path.join(__dirname + "../../../public/html"),
	});
};

exports.base = async (req,res) => {
	let datos = await handlers_mod.base();
	res.render("clientes", { datos: datos });}

exports.error404 = (req, res) => {
    let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${req.path}`;
    res.status(404);
    res.render("404", {
        url: url
    });
}

exports.error500 = (req, res) => {
    res.status(500);
    res.render("500", {
        error: err.message
    })
}