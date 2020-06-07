async function cearArticulo() {
	let resultado = await fetch(`http://localhost:3000/crearArticulo`);
	console.log(resultado);
	let resultadoJson = await resultado.json();
	console.log(resultadoJson);
	  res.render("crearArticulo", {
        layout: "admin",
        imagenUltima: resultadoJson,
    });
};

creaArticulo();

