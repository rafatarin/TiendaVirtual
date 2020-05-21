function comprobarNombreCompleto(){
    var expRegNombreCompuesto = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
    var expRegNombre = /^([\u00c0-\u01ffa-zA-Z'\-])+$/
    if ((!expRegNombre.test(this.value)) && (!expRegNombreCompuesto.test(this.value))) {
      event.preventDefault();
      var nodoError = document.createElement("p");
      nodoError.setAttribute("id", "nodo");
      var contError = document.createTextNode("El campo no es correcto");
      nodoError.appendChild(contError);
      this.parentNode.appendChild(nodoError);
      error.classList.add("errorEnCasillas");
      this.classList.add("errorEnCasillas");
    } else {
      var nodoError = document.getElementById("nodo");
      if (nodoError != null) {
        nodoError.remove();
        this.classList.remove("errorEnCasillas");
      }
  }
  }
  
  var nombreCompleto = document.getElementsByClassName("nombreCompleto");
  for (i = 0; i < nombreCompleto.length; i++) {
    nombreCompleto[i].addEventListener("change", comprobarNombreCompleto)
  }