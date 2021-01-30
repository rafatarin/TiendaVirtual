const bd = require("mariadb");

const config = {
	host: "localhost",
	user: "", // Introducir el usuario del PC
	password: "", //Introducir la contraseña de dominio
	database: "pedidoArticulo" //Debe nombrarse como se ha creado en la base de datos de INSERTS.SQL
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
