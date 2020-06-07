var cantidadArticulo = 0;
var cantidades = document.getElementsByClassName("cantidadCarro");
    for(var i=0; i < cantidades.length; i++){
    cantidades[i].addEventListener("mouseup", async function (){
        cantidadArticulo++;
        }); 
    }


async function guardarArticulos() {
    
    
    let respuesta = await fetch(
        `http://localhost:3000/misArticulos?product=${this.id}&quantity=${cantidadArticulo}`, {
            method: "GET",
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
