const bd = require("mariadb");

const config = {
<<<<<<< HEAD
	host: "localhost", //Se ha probado también con fpe1910.com
	user: "rafa",
=======
	host: "localhost",
<<<<<<< HEAD
	user: "ruben",
	password: "potaymacho",
	database: "pedidosArticulo"
=======
	user: "cecilia",
>>>>>>> 764bcf0069e26113f584dd67eddab0be2ae5c0e9
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
