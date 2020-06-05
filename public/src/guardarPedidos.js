

async function guardarArticulos() {
	let respuesta = await fetch(
		`http://localhost:3000/pedidosGuardados/${this.id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		
		}
	);		

	
}

var userSelection = document.getElementsByClassName('cesta');

for(var i = 0; i < userSelection.length; i++) {
  
    userSelection[i].addEventListener("click", guardarArticulos);
     } 





	 async function enviarCantidad() {
		 
		let respuesta = await fetch(
			`http://localhost:3000/articulosGuardados/${this.value}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
			
			}
		);		
	}

	document.getElementById("cantidad").addEventListener("blur", enviarCantidad)