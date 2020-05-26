async function busquedaStock() {
	let terminos = document.getElementById("id_text_search").value;
	let resultado = await fetch(
		`http://localhost:3000/buscaPorTexto/${terminos}`
	);
	console.log(resultado);
	let resultadoJson = await resultado.json();
	console.log(resultadoJson);
	let template = Handlebars.templates.stock;
	document.getElementById("resultados").innerHTML = template({
		stock: resultadoJson,
	});
}
document.getElementById("id_search").addEventListener("click", busquedaStock);

async function buscaTodoStock() {
	let resultado = await fetch(`http://localhost:3000/buscaTodoStock`);
	console.log(resultado);
	let resultadoJson = await resultado.json();
	console.log(resultadoJson);
	let template = Handlebars.templates.stock;
	document.getElementById("resultados").innerHTML = template({
		stock: resultadoJson,
	});
}
buscaTodoStock();
/*
async function procesarBoton(e) {
	let actualizarPulsado = e.target.className;
	console.log(actualizarPulsado);

	let descripcion = e.target.value;
	console.log(id_articulo + "" + descripcion);
	if (actualizarPulsado) {
		let id_articulo = e.target.id;
		console.log(id_articulo);
		let nuevaDescripcion = document.getElementById("input" + id_articulo)
			.value;
		console.log(nuevaDescripcion);
		let respuesta = await fetch(
			`http://localhost:3000/descripcion/${id_articulo}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ descripcion: descripcion }),
			}
		);
		let respuestaJson = await respuesta.json();
		console.log(respuestaJson);
	}
}
document.getElementById("botones").addEventListener("click", procesarBoton);
*/
