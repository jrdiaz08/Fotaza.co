const video = document.getElementById("video");
  function startup() {
  var ancho = window.innerWidth;
  var alto = window.innerHeight;
  console.log(ancho);
  console.log(alto);
  //document.getElementById(' ').style.transform="scale(0)"; // en la seccion "" se altera la propiedad css escala 
var anchovideo = ancho;
var altovideo = ancho*1.33;    
    
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { width: AnchoVideo, height: AltoVideo },
}).then(stream => {video.srcObject = stream;
                  }).catch(console.error)
  }
window.addEventListener('load',startup, false);

function fecha() { // funcion que extrae la fecha del navegador, codigo descargado
    var hoy = new Date();
    var m = new Array();
    var d = new Array();
    var an= hoy.getFullYear();
    m[0]="Enero";  m[1]="Febrero";  m[2]="Marzo";
    m[3]="Abril";   m[4]="Mayo";  m[5]="Junio";
    m[6]="Julio";    m[7]="Agosto";   m[8]="Septiembre";
    m[9]="Octubre";   m[10]="Noviembre"; m[11]="Diciembre";
    document.write(hoy.getDate());
    document.write(" de ");
    document.write(m[hoy.getMonth()]);
    document.write(" ");
    document.write(hoy.getFullYear());   
}


