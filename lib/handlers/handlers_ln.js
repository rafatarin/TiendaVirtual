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
res.render("inicio", {secciones: arraySecciones})
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


exports.nuevoUsuario = async (req, res)=>{
    await handlers_mod.usuarioRegistrado(req.body);
    res.redirect("/");
}

exports.login = async (req,res) =>{
    res.sendFile("login.html", {root: path.join(__dirname + "../../../public/html")})
}

exports.login2 = async (req,res) =>{
    res.sendFile("login2.html", {root: path.join(__dirname + "../../../public/html")})
}

exports.compruebaLoginUsuario = async (req, res)=>{
    var email = await handlers_mod.consultaLogin(req.body.email);
    
    if (email.length>0) {
        if (email[0].password == req.body.password){
            
            req.session.user = req.body.email;
            console.log(req.session.user);
            res.redirect("/usuario")
        }  else {
        res.sendFile("loginIncorrect.html", {root: path.join(__dirname + "../../../public/html")})
    }

}
    else {
        res.sendFile("loginIncorrect.html", {root: path.join(__dirname + "../../../public/html")})
    }
}

exports.compruebaLoginAdmin = async (req, res)=>{
    var email = await handlers_mod.consultaLoginAdmin(req.body.email);
    
    if (email.length>0) {
        if (email[0].password == req.body.password){
            
             req.session.user = req.body.email;
            console.log(req.session.user);
            res.redirect("/admin")
        }  else {
        res.sendFile("loginIncorrect2.html", {root: path.join(__dirname + "../../../public/html")})
    }

}
    else {
        res.sendFile("loginIncorrect2.html", {root: path.join(__dirname + "../../../public/html")})
    }
}

exports.logout = async (req, res)=> {
    res.redirect("/")
}

exports.logout2 = async (req, res)=> {
    res.redirect("/")
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