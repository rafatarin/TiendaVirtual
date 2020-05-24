const bd = require("mariadb");

const config = {
	host: "localhost",
	user: "ruben",
	password: "potaymacho",
	database: "pedidosArticulo"
};

async function conecta() {

	try {
		const pool = await bd.createPool(config);
		const conexion = await pool.getConnection();
		return conexion;
	} catch (err) {
		throw err;
	}
};

module.exports = conecta();