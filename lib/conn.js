const bd = require("mariadb");

const config = {
	host: "localhost",
	user: "ceciliadb",
	password: "Lisbeth7",
	database: "pedidoArticulo"
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

//user: "rafa",
//password: "543321",