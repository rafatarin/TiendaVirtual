const bd = require("mariadb");

const config = {
	host: "localhost",
	user: "root",
	password: "potaymacho",
	database: "pedidoProductos"
};

async function conecta(){
	
	try{
		const pool = await bd.createPool(config);
		const conexion = await pool.getConnection();
		return conexion;
	} catch(err) {
		throw err;
	}
};

module.exports = conecta();