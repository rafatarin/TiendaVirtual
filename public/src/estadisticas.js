let x = [];
let y = [];

async function getData2() {
	let resultado = await fetch(`http://localhost:3000/datosGraf2`);
	let data = await resultado.json();
	console.log(data);
	for (let i in data) {
		x.push(data[i].articulos);
		console.log("descripcion" + x);
		y.push(data[i].cantidad);
		console.log("datos" + y);
	}
}

let usuarios = [];
let dates = [];

async function getData() {
	let resultado = await fetch(`http://localhost:3000/datosGraf`);
	let data = await resultado.json();
	console.log("data" + data);
	for (let i in data) {
		usuarios.push(data[i].usuarios);
		console.log("descripcion" + usuarios);
		dates.push(data[i].dates)s;
		console.log("datos" + dates);
	}
}
