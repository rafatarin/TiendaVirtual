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



exports.catalogo = async (req,res) =>{
    var arraySecciones = [{img: "ropa_deportiva.png", desc: "Ropa deportiva"},{img: "zapatillas.png", desc: "Zapatillas de deporte"},
                        {img: "joyas.png", desc: "Joyería"},{img: "juguetes.png", desc: "Juguetes"},{img:"libros.png", desc: "Libros"}];
res.render("caretaInicial", {secciones: arraySecciones})
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
    res.render("clientes", { datos: datos });
}


exports.registro = async (req,res) =>{
    res.sendFile("registro.html", {root: path.join(__dirname + "../../../public/html")})
}

exports.registro2 = async (req,res) =>{
    res.sendFile("registro2.html", {root: path.join(__dirname + "../../../public/html")})
}

exports.registro3 = async (req,res) =>{
    res.sendFile("registro3.html", {root: path.join(__dirname + "../../../public/html")})
}



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