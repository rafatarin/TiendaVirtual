
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}

var firebaseConfig = {
  apiKey: "AIzaSyDv3hPzROHPp1CnM3wjbJXcgGLL0vZSiow",
  authDomain: "pedidossalus-3ba1e.firebaseapp.com",
  databaseURL: "https://pedidossalus-3ba1e.firebaseio.com",
  projectId: "pedidossalus-3ba1e",
  storageBucket: "pedidossalus-3ba1e.appspot.com",
  messagingSenderId: "763925150525",
  appId: "1:763925150525:web:032a7b7516cddff1dbe354",
  measurementId: "G-JPW3PBV9BN"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().languageCode = 'es';


const sendSMS = async () =>{
const captcha = new firebase.auth.RecaptchaVerifier('captcha', {
  size: 'invisible',
  });

const phoneNumber = prompt("Introduce tu número de telefono movil");

const result = await firebase
  .auth()
  .signInWithPhoneNumber(phoneNumber, captcha);

const code = prompt("Escribe el código de confirmación")

try{
  const { user } = await result.confirm(code);
  if(user) {
    let nodeElement = document.createElement("p");
    let inputSeleccionar = document.createElement("a");
    let inputText = document.createTextNode("Identificarse");
    let nodeText = document.createTextNode("Código correcto, pinche en el botón de Identificarse")
    nodeElement.appendChild(nodeText)
    inputSeleccionar.appendChild(inputText);
    document.body.appendChild(nodeElement);
    document.getElementById("inputSeleccion").parentNode.appendChild(inputSeleccionar)
    inputSeleccionar.href= '/usuarioRegistrado';
  };
} catch (error) {
  console.log("Código no es correcto")
}
}

sendSMS();