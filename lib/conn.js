const bd = require("mariadb");

const config = {
	host: "localhost",
	user: "", //usuario del propio PC
	password: "", //contraseña de dominio
	database: "pedidoArticulo" //Se puede canviar según como se nombre al crear la base de datos.
};

async function conecta() {
	try {
		const pool = await bd.createPool(config);
		const conexion = await pool.getConnection();
		return conexion;
	} catch (err) {
		throw err;
	}
}

module.exports = conecta();

