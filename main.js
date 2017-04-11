var botonFutbol = document.getElementById("botonFutbol");
var botonTennis = document.getElementById("botonTennis");
var botonBasquet = document.getElementById("botonBasquet");

var canchas = document.getElementsByClassName("canchas");

botonFutbol.addEventListener("click",mostrarCanchaFutbol);
botonTennis.addEventListener("click",mostrarCanchaTennis);
botonBasquet.addEventListener("click",mostrarCanchaBasquet);

function mostrarCanchaFutbol() {
  canchas[0].style.display = "block";
  canchas[1].style.display = "none";
  canchas[2].style.display = "none";
}

function mostrarCanchaTennis() {
  canchas[0].style.display = "none";
  canchas[1].style.display = "block";
  canchas[2].style.display = "none";
}

function mostrarCanchaBasquet() {
  canchas[0].style.display = "none";
  canchas[1].style.display = "none";
  canchas[2].style.display = "block";
}
