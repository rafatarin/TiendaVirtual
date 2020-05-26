async function busquedaUsuario() {
	let terminos = document.getElementById("id_text_search").value;
	console.log(terminos);
	let resultado = await fetch(
		`http://localhost:3000/buscaUsuario/${terminos}`
	);
	console.log(resultado);
	let resultadoJson = await resultado.json();
	console.log(resultadoJson);
	let template = Handlebars.templates.clientes;
	document.getElementById("resultados").innerHTML = template({
		clientes: resultadoJson,
	});
}
document.getElementById("id_search").addEventListener("click", busquedaUsuario);

async function buscaTodoUsuarios() {
	let resultado = await fetch(`http://localhost:3000/buscaTodoUsuarios`);
	console.log(resultado);
	let resultadoJson = await resultado.json();
	console.log(resultadoJson);
	let template = Handlebars.templates.clientes;
	document.getElementById("resultados").innerHTML = template({
		clientes: resultadoJson,
	});
}
buscaTodoUsuarios();
