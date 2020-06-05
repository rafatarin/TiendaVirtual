
exports.categorias = async () =>{
  let conn = 0;
  try {
    const conn = await require("../conn.js");
    let datos = await conn.query("SELECT categoria FROM categorias;");
    return datos;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }

}


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

exports.articulos = async (categoria) => {
  let conn = 0;
  try {
    const conn = await require("../conn.js");
    let datos = await conn.query(`SELECT a.* FROM articulos a INNER JOIN categorias cat INNER JOIN secciones_articulos sa ON a.id_articulo = sa.id_articulo AND sa.id_categoria = cat.id_categoria WHERE cat.categoria="${categoria}";`);
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
    var datos = await conn.query(
      `SELECT nombre, email, password, usuario, rol FROM clientes WHERE email="${email}";`);
    return datos;
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

exports.mostrarUsuarios = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(`SELECT * FROM clientes;`);
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.mostrarPerfil = async (usuario) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
      `SELECT * FROM clientes WHERE usuario="${usuario}";`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.actualizarPerfil = async (usuario, identificacion) => {
  let conn;
  try {
    console.log(identificacion);
    conn = await require("../conn.js");
    let resultado = await conn.query(
      `UPDATE clientes SET nombre="${usuario[0][0]}", apellido1="${usuario[0][1]}", apellido2="${usuario[0][2]}", usuario="${usuario[0][3]}", email="${usuario[0][4]}", poblacion="${usuario[0][5]}" WHERE usuario="${identificacion}" `
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};


exports.registrarUsuario = async (array) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
      `INSERT INTO clientes (nombre, apellido1, apellido2, usuario, email, password, rol) VALUES ('${array[0][0]}','${array[0][1]}','${array[0][2]}','${array[1]}','${array[2][0]}','${array[2][1]}','cliente');`);
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};;

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
    let datos = await conn.query(
      "SELECT p.id_pedido, a.descripcion, d.cantidad, c.id_cliente FROM pedidos p INNER JOIN detalle_pedidos d INNER JOIN articulos a INNER JOIN clientes c ON p.id_pedido = d.id_pedido AND d.id_articulo = a.id_articulo AND c.id_cliente = p.id_cliente WHERE d.pedidos_en_proceso = true AND d.pedidos_enviados = true AND d.pedidos_entregados = true;"
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

exports.datosGraf = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `select id_cliente as usuarios, fecha_registro as dates from clientes;`
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

exports.datosGraf2 = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `select a.descripcion as articulos, d.cantidad as cantidad from detalle_pedidos d inner join articulos a on a.id_articulo= d.id_articulo where d.pedidos_entregados = true and d.pedidos_enviados = true;`
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

exports.datosGraf3 = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `select a.descripcion as articulos, d.cantidad, c.poblacion from clientes c inner join articulos a inner join detalle_pedidos d inner join pedidos p on d.id_pedido = p.id_pedido on a.id_articulo = d.id_articulo and p.id_cliente = c.id_cliente where d.pedidos_entregados = true and d.pedidos_enviados = true;`
      
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
      `select id_articulo, descripcion, categoria, stock, precio, imagen from articulos;`
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

exports.descripcion = async (descripcion, id_articulo) => {
  let conn;
  try {
    conn = await require("../conn.js");
    var datos = conn.query(
      `update articulos set descripcion = ${descripcion} where id_articulo = ${id_articulo};`
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

exports.buscaPorTexto = async (texto) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let stock = conn.query(
      `select id_articulo, descripcion, categoria, stock, precio, imagen from articulos where descripcion regexp "${texto}";`
    );
    return stock;
    console.log(stock);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.buscaUsuario = async (texto) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let clientes = conn.query(
      `select id_cliente, nombre, apellido1, apellido2, usuario, email, poblacion from clientes where nombre regexp "${texto}" or apellido1 regexp "${texto}" or apellido2 regexp "${texto}" or usuario regexp "${texto}";`
    );
    return clientes;
    console.log(clientes);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.buscaTodoUsuarios = async (texto) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let clientes = conn.query(
      `select id_cliente, nombre, apellido1, apellido2, usuario, email, poblacion from clientes;`
    );
    return clientes;
    console.log(clientes);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};
exports.buscaTodoStock = async (texto) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let stock = conn.query(
      `select id_articulo, descripcion, categoria, stock, precio, imagen from articulos;`
    );
    return stock;
    console.log(stock);
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

exports.buscarCliente = async (id_cliente) => {
  console.log(id_pedido);
  let conn;
  try {
    conn = await require("../conn.js");
    let datosCliente = conn.query(
      `select * from detalle_pedidos d inner join pedidos p on p.id_pedido = d.id_pedido where id_cliente = = ${id_cliente};`
    );
    return datosCliente;
    console.log(datosCliente);
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

exports.historicoPedidos = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    let historicoPedidos = conn.query(
      `select p.id_pedido, a.descripcion, d.cantidad, c.id_cliente from pedidos p inner join detalle_pedidos d inner join articulos a inner join clientes c on p.id_pedido = d.id_pedido and d.id_articulo = a.id_articulo and c.id_cliente = p.id_cliente where d.pedidos_en_proceso = true and d.pedidos_enviados = true and d.pedidos_entregados = true;`
    );
    return historicoPedidos;
    console.log(historicoPedidos);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.modificaDesc = async (descripcion, id_articulo) => {
  let conn;
  console.log(descripcion, id_articulo)
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
       `update articulos set descripcion = "${descripcion}" where id_articulo = ${id_articulo};`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.modificaStock = async (stock, id_articulo) => {
  let conn;
  console.log(stock, id_articulo)
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
       `update articulos set stock = "${stock}" where id_articulo = ${id_articulo};`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.modificaPrecio = async (precio, id_articulo) => {
  let conn;
  console.log(precio, id_articulo)
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
       `update articulos set precio = "${precio}" where id_articulo = ${id_articulo};`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.modificaImagen = async (imagen, id_articulo) => {
  let conn;
  console.log(imagen, id_articulo)
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
       `update articulos set imagen = "${imagen}" where id_articulo = ${id_articulo};`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.creaArticulo = async (descripcion, stock, precio) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
      `insert into articulos (descripcion, stock, precio) values ("${descripcion}", ${stock}, ${precio});`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

exports.imagenUltima = async () => {
  let conn;
  try {
    conn = await require("../conn.js");
    let resultado = await conn.query(
      `select imagen from articulos order by id_articulos desc limit 1;`
    );
    return resultado;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};


exports.facturacion = async (email) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let facturacion = await conn.query(
      `SELECT c.*, a.descripcion, a.precio, p.id_pedido, p.cantidad, pe.fecha_pedido, ROUND(a.precio*p.cantidad, 2) precioCantidad FROM articulos a INNER JOIN clientes c INNER JOIN detalle_pedidos p INNER JOIN pedidos pe ON a.id_articulo = p.id_articulo AND c.id_cliente = pe.id_cliente AND pe.id_pedido = p.id_pedido WHERE c.email = "${email}";`
    );
    return facturacion;
    
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

//los del usuario

exports.guardarArticulos = async (id_articulo) => {
  let conn;
  try {
    conn = await require("../conn.js");
    var guardarArticulos = await conn.query(
      `select * from articulos WHERE id_articulo=${id_articulo};`
    );
    return guardarArticulos;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};

/*
exports.eliminarCuenta = async (correo) => {
  let conn;
  try {
    conn = await require("../conn.js");
    let guardarPedidos = await conn.query(
      `DELETE FROM clientes WHERE email="${correo}";`
    );
    return guardarPedidos;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
};*/