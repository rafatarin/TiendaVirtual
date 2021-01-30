async function actualizaProceso(id_pedido) {
	let respuesta = await fetch(
		`http://localhost:3000/actualizaProceso/${id_pedido}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id_pedido: id_pedido
			}),
		}
	);
}

async function muestraMensaje(id_pedido) {
	let newLi = document.createElement("li");
	let newContent = document.createTextNode(
		`Este pedido pasa a estar en la vista Pedidos Enviados`
	);
	newLi.appendChild(newContent);
	let mensaje = "mensaje"

	let currentDiv = document.getElementById(`${id_pedido}` + mensaje).append(newLi);
}


