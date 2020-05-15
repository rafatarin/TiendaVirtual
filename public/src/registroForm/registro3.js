
function comprobarEmail(){
      
    var expRegEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/ ;
    
    if(!expRegEmail.test(this.value)){
      event.preventDefault();
      var nodoError2 = document.createElement("p");
      nodoError2.setAttribute("id", "nodo");
      var contError2 = document.createTextNode("El campo debe ser ejemplo@compañia_de_correo.com");
      nodoError2.appendChild(contError2);
      console.log(contError2);
      console.log(this);
      this.parentNode.appendChild(nodoError2);
      nodoError2.classList.add("errorEnCasillas");
      this.classList.add("errorEnCasillas");
    } else {
      var nodoError2 = document.getElementById("nodo");
      if (nodoError2 != null) {
        nodoError2.remove();
        this.classList.remove("errorEnCasillas");
      }
  }
  }
  
  
  document.getElementById("email").addEventListener("change", comprobarEmail)
  
  
function comprobarContraseña(){
  
  var expRegContraseña = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //CONTRASEÑA /Minimo 8 caracteres, al menos 1 letra, 1 número y un carácter especial
  
    if( !expRegContraseña.test(this.value)){
      event.preventDefault();
        var nodoError4 = document.createElement("p");
        nodoError4.setAttribute("id", "nodo");
        var contError4 = document.createTextNode("El campo no coincide con Usuario");
        nodoError4.appendChild(contError4);
        this.parentNode.appendChild(nodoError4);
        nodoError4.classList.add("errorEnCasillas");
        this.classList.add("errorEnCasillas")
    } else {
      var nodoError4 = document.getElementById("nodo");
      if (nodoError4 != null) {
        nodoError4.remove();
        this.classList.remove("errorEnCasillas");
      }
  }
  }
  
document.getElementById("contraseña").addEventListener("change", comprobarContraseña);

function comprobarRepContraseña(){
  
  var campoContraseña = document.getElementById("contraseña");

  if(campoContraseña.value != this.value){
    event.preventDefault();
      var nodoError5 = document.createElement("p");
      nodoError5.setAttribute("id", "nodo");
      var contError5 = document.createTextNode("El campo no coincide con la contraseña");
      nodoError5.appendChild(contError5);
      this.parentNode.appendChild(nodoError5);
      nodoError5.classList.add("errorEnCasillas");
      this.classList.add("errorEnCasillas")
  } else {
    var nodoError5= document.getElementById("nodo");
    if (nodoError5 != null) {
      nodoError5.remove();
      this.classList.remove("errorEnCasillas");
    }
}
}

document.getElementById("rep_contraseña").addEventListener("change", comprobarRepContraseña)