async function actualizaEnviados(id_pedido) {
	let respuesta = await fetch(
		`http://localhost:3000/actualizaEnviados/${id_pedido}`,
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id_pedido: id_pedido }),
		}
	);
	let respuestaJson = await respuesta.json();
	console.log(respuestaJson.json);
}

async function muestraMensajeEnv(id_pedido) {
	let newLi = document.createElement("li");
	let newContent = document.createTextNode(
		"Este pedido pasa a estar en la vista Histórico Pedidos"
	);
	newLi.appendChild(newContent);
	let mensaje = "mensaje"
	var currentDiv = document.getElementById(`${id_pedido}`+ mensaje).append(newLi);
	
}
