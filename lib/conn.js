const bd = require("mariadb");

const config = {

	host: "localhost", //Se ha probado también con fpe1910.com
	user: "rafa",
	password: "543321",
	database: "pedidoArticulo",
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
