const bd = require("mariadb");

const config = {

<<<<<<< HEAD
	host: "localhost", 
=======
	host: "localhost", //Se ha probado también con fpe1910.com
>>>>>>> 33eb2647c200cd9c858552555736742c54f2f2b2
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
