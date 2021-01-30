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

async function procesarDesc(e){
	let actualizarPulsado = e.target.className === "btModificar";
	if (actualizarPulsado){
		let descr = e.target.parentElement.childNodes[3].id;
		console.log(descr)
		let sacoNum = descr.split("-");
		let id_articulo = sacoNum[1];
		console.log(id_articulo)
		let nuevaDescripcion = document.getElementById(descr).value;
		let respuesta = await fetch(`http://localhost:3000/modificaDesc/${id_articulo}`, {
										method: 'PUT',
										headers: {"Content-Type":"application/json"},
										body: JSON.stringify({descripcion: nuevaDescripcion})
								});
		let respuestaJson = await respuesta.json();
		console.log(respuestaJson);
		buscaTodoStock();
}
}
document
	.getElementById("resultados")
	.addEventListener("click", procesarDesc);
  
    
async function procesarStock(e){
	let actualizarStock = e.target.className === "btModificarStock";
	if (actualizarStock){
		let stock = e.target.parentElement.childNodes[3].id;
		let sacoNum = stock.split("-");
		let id_articulo = sacoNum[1];
		console.log(id_articulo)
		let nuevoStock = document.getElementById(stock).value;
		let respuesta = await fetch(`http://localhost:3000/modificaStock/${id_articulo}`, {
										method: 'PUT',
										headers: {"Content-Type":"application/json"},
										body: JSON.stringify({stock: nuevoStock})
								});
		let respuestaJson = await respuesta.json();
		buscaTodoStock();
}
}
document
	.getElementById("resultados")
	.addEventListener("click", procesarStock);

async function procesarPrecio(e){
	let actualizarPrecio = e.target.className === "btModificarPrecio";
	if (actualizarPrecio){
		let precio = e.target.parentElement.childNodes[3].id;
		let sacoNum = precio.split("-");
		let id_articulo = sacoNum[1];
		let nuevoPrecio = document.getElementById(precio).value;
		let respuesta = await fetch(`http://localhost:3000/modificaPrecio/${id_articulo}`, {
										method: 'PUT',
										headers: {"Content-Type":"application/json"},
										body: JSON.stringify({precio: nuevoPrecio})
								});
		let respuestaJson = await respuesta.json();
		buscaTodoStock();
}
}
document
	.getElementById("resultados")
	.addEventListener("click", procesarPrecio);


async function procesarCategoria(e){
	console.log(e)
	let actualizarCategoria = e.target.className === "btModificarCategoria";
	console.log(actualizarCategoria)
	if (actualizarCategoria){
		let categoria = e.target.id;
		console.log(categoria);		
		let sacoNum = categoria.split("-");
		console.log(sacoNum);
		let id_articulo = sacoNum[1];
		console.log(id_articulo)
		let nuevaCategoria = sacoNum[0];
		let respuesta = await fetch(`http://localhost:3000/modificaCategoria/${id_articulo}`, {
										method: 'POST',
										headers: {"Content-Type":"application/json"},
										body: JSON.stringify({categoria: nuevaCategoria})
								});
		let respuestaJson = await respuesta.json();
		buscaTodoStock();
}
}
document
	.getElementById("resultados")
	.addEventListener("click", procesarCategoria);

