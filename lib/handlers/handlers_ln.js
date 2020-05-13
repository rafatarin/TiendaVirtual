const path = require("path");
const handlers_mod = require("./handlers_mod.js");


exports.login = async (req,res)=>{
    res.sendFile("app.html", {root: path.join(__dirname + "../../../public/html")})
}

exports.usuario = async (req,res) =>{
	  res.sendFile("usuario.html", {root: path.join(__dirname + "../../../public/html")})
}


exports.error404=(req,res)=>{
    let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${req.path}`;
    res.status(404);
    res.render("404", {url:url});
}

exports.error500=(req,res)=>{
    res.status(500);
    res.render("500", {error: err.message})
}