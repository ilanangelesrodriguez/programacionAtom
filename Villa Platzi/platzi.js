var vp= document.getElementById("villaplatzi");
var papel= vp.getContext("2d");
var mapa= "tile.png";

var imagen= new Image();
imagen.src= mapa;
imagen.addEventListener("load", dibujar);

var vaca= new Image();
vaca.src= "vaca.png";
vaca.addEventListener("load", dibujarVacas);
var pollo= new Image();
pollo.src= "pollo.png";
pollo.addEventListener("load", dibujarPollos);
var cerdo= new Image();
cerdo.src= "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

function dibujar()
{
  papel.drawImage(imagen,0,0);
}
function dibujarVacas()
{
  papel.drawImage(vaca,10,10);
}
function dibujarPollos()
{
  papel.drawImage(pollo,220,220);
}
function dibujarCerdos()
{
  papel.drawImage(cerdo,130,130);
}


function aleatorio(min, max)
{
  var resultado;
  resultado= Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
