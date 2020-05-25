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
	let respuestaJson = await respuesta.json();
	console.log(respuestaJson.json);
}
