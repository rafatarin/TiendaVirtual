const bd = require("mariadb");

const config = {
	host: "",
	port: 3306,
	user: "coop_fpe1910",
	password: "46jTu2kpudvoQAb_",
	database: "coop_fpe1910"
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