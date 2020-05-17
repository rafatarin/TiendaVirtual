const bd = require("mariadb");

exports.consultaLogin = async (email)=>{
  let conn;
  try{
    conn = await require("../conn.js");
    var datos = conn.query(`SELECT email, password FROM clientes WHERE email="${email}"`);
    return datos;
    console.log(datos)
    
  } catch(err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}

exports.consultaLoginAdmin = async (email)=>{
  let conn;
  try{
    conn = await require("../conn.js");
    var datos = conn.query(`SELECT email, password FROM admin WHERE email="${email}"`);
    return datos;
    console.log(datos)
    
  } catch(err) {
    throw err;
  } finally {
    if (conn) {
      conn.end();
    }
  }
}


exports.base = async() =>{

	let cursor;
	let salida;
	try {
		let movies = [{
      "id": 1,
      "nombre": "Diego",
      "email": "diego@gmail.com",
      "telefono": 123456789
    },
    {
      "id": 2,
      "nombre": "Jordi",
      "email": "jordi@gmail.com",
      "telefono": 234567890
    },
    {
      "id": 3,
      "nombre": "Julio",
      "email": "julio@gmail.com",
      "telefono": 345678901
    },
    {
      "id": 4,
      "nombre": "Jano",
      "email": "jano@gmail.com",
      "telefono": 456789012
    },
    {
      "id": 5,
      "nombre": "Diego",
      "email": "diego@gmail.com",
      "telefono": 123456789
    },
    {
      "id": 6,
      "nombre": "Jordi",
      "email": "jordi@gmail.com",
      "telefono": 234567890
    },
    {
      "id": 7,
      "nombre": "Julio",
      "email": "julio@gmail.com",
      "telefono": 345678901
    },
    {
      "id": 8,
      "nombre": "Jano",
      "email": "jano@gmail.com",
      "telefono": 456789012
    },{
      "id": 9,
      "nombre": "Diego",
      "email": "diego@gmail.com",
      "telefono": 123456789
    },
    {
      "id": 10,
      "nombre": "Jordi",
      "email": "jordi@gmail.com",
      "telefono": 234567890
    },
    {
      "id": 11,
      "nombre": "Julio",
      "email": "julio@gmail.com",
      "telefono": 345678901
    },
    {
      "id": 12,
      "nombre": "Jano",
      "email": "jano@gmail.com",
      "telefono": 456789012
    },{
      "id": 13,
      "nombre": "Diego",
      "email": "diego@gmail.com",
      "telefono": 123456789
    },
    {
      "id": 14,
      "nombre": "Jordi",
      "email": "jordi@gmail.com",
      "telefono": 234567890
    },
    {
      "id": 15,
      "nombre": "Julio",
      "email": "julio@gmail.com",
      "telefono": 345678901
    },
    {
      "id": 16,
      "nombre": "Jano",
      "email": "jano@gmail.com",
      "telefono": 456789012
    },{
      "id": 17,
      "nombre": "Diego",
      "email": "diego@gmail.com",
      "telefono": 123456789
    },
    {
      "id": 18,
      "nombre": "Jordi",
      "email": "jordi@gmail.com",
      "telefono": 234567890
    },
    {
      "id": 19,
      "nombre": "Julio",
      "email": "julio@gmail.com",
      "telefono": 345678901
    },
    {
      "id": 20,
      "nombre": "Jano",
      "email": "jano@gmail.com",
      "telefono": 456789012
    }]


		return movies;
		

	} catch(err){
		console.error(`No se pudo completar la búsqueda debido a: ${error}` );
		return [];
	} finally {
		
	}

	return salida;
}
