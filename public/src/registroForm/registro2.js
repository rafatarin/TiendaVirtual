  function comprobarUsuario(){
      
    var expRegUsuario = /^(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/ //Expresiones con letras, numeros, puntos y guion bajo.
    if(!expRegUsuario.test(this.value)){
      event.preventDefault();
      var nodoError1 = document.createElement("p");
      nodoError1.setAttribute("id", "nodo");
      var contError1 = document.createTextNode("El campo solo debe contener: letras, numeros, puntos y guiones bajo.");
      nodoError1.appendChild(contError1);
      console.log(this)
      this.parentNode.appendChild(nodoError1);
      contError1.classList.add("errorEnCasillas");
      this.classList.add("errorEnCasillas");
    } else {
      var nodoError1= document.getElementById("nodo");
      if (nodoError1 != null) {
        nodoError1.remove();
        this.classList.remove("errorEnCasillas");
      }
  }
  }
  document.getElementById("usuario").change = comprobarUsuario;

function comprobarRepUsuario(){
  
  var campoUsuario = document.getElementById("usuario");

  if(campoUsuario.value != this.value){
    event.preventDefault();
      var nodoError3 = document.createElement("p");
      nodoError3.setAttribute("id", "nodo");
      var contError3 = document.createTextNode("El campo no coincide con Usuario");
      nodoError3.appendChild(contError3);
      this.parentNode.appendChild(nodoError3);
      nodoError3.classList.add("errorEnCasillas");
      this.classList.add("errorEnCasillas")
  } else {
    var nodoError3= document.getElementById("nodo");
    if (nodoError3 != null) {
      nodoError3.remove();
      this.classList.remove("errorEnCasillas");
    }
}
}

document.getElementById("rep_usuario").addEventListener("change", comprobarRepUsuario)



