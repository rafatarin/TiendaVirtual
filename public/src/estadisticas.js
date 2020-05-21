async function getData() {
	const descripcion = [];
	const datos = [];
	let resultado = await fetch(`http://localhost:3000/datosGraf`);
	console.log(resultado);
	let resultadoJson = await resultado.json();
	console.log(JSON.parse(resultadoJson));
	for (let i in resultadoJson) {
		descripcion.push(resultadoJson[i].descripcion);
		console.log(descripcion);
		datos.push(resultadosJson[i].datos);
	}
}

/*async function canvas() {
	let miCanvas = document.getElementById("grafica").getContext("2d");
	//const data = await getData();

	let chart = new Chart(miCanvas, {
		type: "bar",
		data: {
			labels: ["Productos", "Cantidad"],
			datasets: [
				{
					label: "Venta de Productos",
					backgroundColor: "rgb(255,255,0)",
					data: [2, 3],
				},
			],
		},
	});
}
document.getElementById("muestra").addEventListener("click", canvas);
*/
