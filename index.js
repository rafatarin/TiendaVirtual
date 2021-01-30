const port = process.env.PORT || 3000;
const hhtp = require("http")
const express = require("express");
const handlebars = require("express-handlebars");
const controlador = require("./routes/controlador.js");
const app = express();
const handlers_ln = require("./lib/handlers/handlers_ln.js");
const sesion = require("express-session");
const cookieSession = require("cookie-session");
var MemoryStore = require('memorystore')(sesion)
var admin = require("firebase-admin");
const fileUpload = require('express-fileupload');
const path = require("path");


app.set("port", port);

app.set("view engine", "handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "principal"
}));


app.use(cookieSession({
    name: "session",
    keys: ["llave-1", "llave-2"]

}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.use(fileUpload());

app.use(sesion({
    resave: true,
    saveUninitialized: false,
    secret: "ancient high jack lion",
    store: new MemoryStore(),
    maxAge: Date.now()
}))





app.use("/", controlador);


app.use(handlers_ln.error404)
app.use(handlers_ln.error500)

app.listen(port, () => console.log(`Escuchando el puerto: ${port}`))
