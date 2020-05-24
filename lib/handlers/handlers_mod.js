var msyql = require("mysql")

exports.secciones = async () => {
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

exports.articulos = async () => {
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

exports.consultaLogin = async (email, contraseña) => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `SELECT email, password,usuario FROM clientes WHERE email="${email}";`
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
    var datos = conn.query(`select id_articulo, stock from articulos;`);
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

exports.datosGraf = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `select descripcion, stock from articulos;`
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

exports.buscaPorTexto = async (texto) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let stock = conn.query(
      `select id_articulo, descripcion, categoria, stock, precio from articulos where descripcion regexp "${texto}";`
    );
    return stock;
    console.log(datosGraf);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.clientes = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    let clientes = conn.query(
      `select id_cliente, nombre, apellido1, apellido2, usuario, email, poblacion from clientes;`
    );
    return clientes;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.pedidosEnProceso = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    let enProceso = conn.query(
      `select p.id_pedido, a.descripcion, d.cantidad, c.id_cliente from pedidos p inner join detalle_pedidos d inner join articulos a inner join clientes c on p.id_pedido = d.id_pedido and d.id_articulo = a.id_articulo and c.id_cliente = p.id_cliente where d.pedidos_en_proceso = true and d.pedidos_enviados = false and d.pedidos_entregados = false;`
    );
    return enProceso;
    console.log(enProceso);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.actualizaProceso = async (id_pedido) => {
  console.log(id_pedido);
  let conn;
  try {
    conn = await require("../conn.js");
    let enProceso = conn.query(
      `update detalle_pedidos set pedidos_enviados = true where id_pedido = ${id_pedido};`
    );
    return enProceso;
    console.log(enProceso);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.pedidosEnviados = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    let enviados = conn.query(
      `select p.id_pedido, a.descripcion, d.cantidad, c.id_cliente from pedidos p inner join detalle_pedidos d inner join articulos a inner join clientes c on p.id_pedido = d.id_pedido and d.id_articulo = a.id_articulo and c.id_cliente = p.id_cliente where d.pedidos_en_proceso = true and d.pedidos_enviados = true and d.pedidos_entregados = false;`
    );
    return enviados;
    console.log(enviados);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.actualizaEnviados = async (id_pedido) => {
  console.log(id_pedido);
  let conn;
  try {
    conn = await require("../conn.js");
    let enProceso = conn.query(
      `update detalle_pedidos set pedidos_entregados = true where id_pedido = ${id_pedido};`
    );
    return enProceso;
    console.log(enProceso);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};
