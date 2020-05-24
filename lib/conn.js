const bd = require("mariadb");

const config = {
	host: "localhost",
<<<<<<< HEAD
	user: "ruben",
	password: "potaymacho",
	database: "pedidosArticulo"
=======
	user: "cecilia",
	password: "543321",
	database: "pedidoArticulo",
>>>>>>> 3189a3ec9494447bf2d03c564002a7f88a1290df
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
