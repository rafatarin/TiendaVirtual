async function actualizaProceso(id_pedido) {
	console.log(id_pedido);

	let respuesta = await fetch(
		`http://localhost:3000/actualizaProceso/${id_pedido}`,
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id_pedido: id_pedido }),
		}
	);
}

async function muestraMensaje() {
	let newDiv = document.createElement("p");
	let newContent = document.createTextNode(
		`Este pedido pasa a estar en la vista Pedidos Enviados`
	);
	newDiv.appendChild(newContent);

	let currentDiv = document.getElementById("mensaje");
	document.body.appendChild(newDiv, currentDiv);
}

async function busquedaCliente(id_cliente) {
	console.log(id_cliente);

	let respuesta = await fetch(
		`http://localhost:3000/buscarCliente/${id_cliente}`
	);
	console.log(respuesta + "respuesta");
}
