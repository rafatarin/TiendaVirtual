

  
const ratings = {
  hotel_a : 2.8,
  hotel_b: 3.3,
  hotel_c : 1.9,
  hotel_d : 4.3,
  hotel_e : 4.74
};



function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}