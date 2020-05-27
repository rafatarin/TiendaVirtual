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

async function muestraMensajeEnv() {
	let newDiv = document.createElement("p");
	let newContent = document.createTextNode(
		"Este pedido pasa a estar en la vista Histórico Pedidos"
	);
	newDiv.appendChild(newContent);

	var currentDiv = document.getElementById("mensaje");
	document.body.appendChild(newDiv, currentDiv);
}
