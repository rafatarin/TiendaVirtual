const bd = require("mariadb");

exports.inicio = async () => {
  let conn = 0;
  try {
    const conn = await require("../conn.js");
    let datos = await conn.query("SELECT categoria FROM articulos;");
    return datos;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.catalogo = async () => {
  let conn = 0;
  try {
    const conn = await require("../conn.js");
    let datos = await conn.query("SELECT * FROM articulos;");
    return datos;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.consultaLogin = async (email) => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `SELECT email, password FROM clientes WHERE email="${email}";`
    );
    return datos;
    console.log(datos);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.consultaLoginAdmin = async (email) => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `SELECT email, password FROM admin WHERE email="${email}";`
    );
    return datos;
    console.log(datos);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.usuarioRegistrado = async (array) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
      `INSERT INTO clientes (nombre, apellido1, apellido2, usuario, email, password) VALUES ('${array[0][0]}','${array[0][1]}','${array[0][2]}','${array[1]}','${array[2][0]}','${array[2][1]}');`
    );
    console.log(resultado);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

//las búsquedas del administrador
exports.datos = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `select id_articulo, stock from articulos;`
      //`select count(id_articulo) as id_articulo, sum(cantidad) as cantidad from detalle_pedidos;`
    );
    return datos;
    console.log(datos);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.stock = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `select id_articulo, descripcion, categoria, stock, precio from articulos;`
    );
    return datos;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.anadirPedido = async () => {
  let conn;
  try {
    const conn = await require("../conn.js");
    let datos = await conn.query("SELECT * FROM articulos;");
    return datos;
    
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.historico = async () => {
  let conn;
  try {
    const conn = await require("../conn.js");
    let datos = await conn.query("SELECT p.id_pedido, a.descripcion, d.cantidad, c.id_cliente FROM pedidos p INNER JOIN detalle_pedidos d INNER JOIN articulos a INNER JOIN clientes c ON p.id_pedido = d.id_pedido AND d.id_articulo = a.id_articulo AND c.id_cliente = p.id_cliente WHERE d.pedidos_en_proceso = true AND d.pedidos_enviados = true AND d.pedidos_entregados = true;");
    return datos;
    console.log(datos)
    
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};