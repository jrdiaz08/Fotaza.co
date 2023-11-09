let navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.mediaDevices.getUserMedia);
let video = document.getElementById("video");
let vortice = document.getElementById("vortice");
let canales;
let cambioCamara = "user";
var videoconfig = {audio: false,
  video: {facingMode: cambioCamara, autoPlay={true},
playsInline={true}, muted={true} }
};
var alto = window.innerHeight; 
var ancho = window.innerWidth;
var altocomandos = alto*0.1;
var altofinal = alto*0.1;
var altopantalla = ancho*1.33;
var altovideo = ancho*1.33;
var altosuperior = (alto-altopantalla-altocomandos-altofinal)/2;
var altoinferior = (alto-altopantalla-altocomandos-altofinal)/2;
var centro = (ancho-(ancho*0.3))/2;
var total = altosuperior+altopantalla+altoinferior+altocomandos+altofinal;

var lienzo = document.createElement("canvas");
  lienzo.id = "lienzo";
  lienzo.width = ancho;
  lienzo.height = altovideo;
  lienzo.style.position="absolute";
  lienzo.style.top =altosuperior + "px";
  lienzo.style.left="0%";
  lienzo.style.zIndex="2";

function startup() {

  navigator.getUserMedia(videoconfig).then(stream => { 
    video.srcObject = stream,
    canales = stream.getTracks();
    ;
  }).catch(console.error)

  console.log("alto= ",alto);
  console.log("ancho= ",ancho);
  console.log("alto superior= ",altosuperior);
  console.log("alto pantalla= ",altopantalla);
  console.log("alto inferior= ",altoinferior);
  console.log("alto comandos= ",altocomandos);
  console.log("alto final= ",altofinal);
  console.log("alto total= ",total);
  console.log("alto video= ",(video.height));
  console.log("ancho video= ",(video.width));

  document.getElementById('limpiar').style.display = "none"; // en la seccion "limpiar" se altera la propiedad css display
  document.getElementById('guardar').style.display = "none"; // en la seccion "guardar" se altera la propiedad css display

  document.getElementById('fondo').style.height = alto + "px"; // en la seccion "fondo" se altera la propiedad css heigth
  document.getElementById('fondo').style.width = ancho + "px"; // en la seccion "fondo" se altera la propiedad css width
  document.getElementById('superior').style.height = altosuperior + "px"; // en la seccion "fondo" se altera la propiedad css heigth
  document.getElementById('superior').style.width = ancho + "px"; // en la seccion "fondo" se altera la propiedad css width  
  document.getElementById('pantalla').style.height = altopantalla + "px"; // en la seccion "pantalla" se altera la propiedad css heigth
  document.getElementById('pantalla').style.width = ancho + "px"; // en la seccion "pantalla" se altera la propiedad css width 
  document.getElementById('video').style.height = altovideo + "px"; // en la seccion "pantalla" se altera la propiedad css height
  document.getElementById('video').style.width = ancho + "px"; // en la seccion "pantalla" se altera la propiedad css width

  document.getElementById('inferior').style.height = altoinferior + "px"; // en la seccion "fondo" se altera la propiedad css heigth
  document.getElementById('inferior').style.width = ancho + "px"; // en la seccion "fondo" se altera la propiedad css width 
  document.getElementById('comandos').style.height = altocomandos + "px"; // en la seccion "comandos" se altera la propiedad css heigth
  document.getElementById('comandos').style.width = ancho + "px"; // en la seccion "comandos" se altera la propiedad css width 
  document.getElementById('final').style.height = altofinal + "px"; // en la seccion "final" se altera la propiedad css heigth
  document.getElementById('final').style.width = ancho + "px"; // en la seccion "final" se altera la propiedad css width 
  
  document.getElementById('vortice').style.top = altosuperior + "px"; // en la seccion "final" se altera la propiedad css heigth
  document.getElementById('vortice').style.left = centro + "px"; // en la seccion "final" se altera la propiedad css width 

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

function modo() {
  if(cambioCamara == "user"){
   canales.forEach(track => track.stop())
    cambioCamara = "environment";
    console.log("Camara= ",cambioCamara);
    videoconfig = {audio: false,
      video: {facingMode: cambioCamara, autoPlay={true},
playsInline={true}, muted={true} }
    };  navigator.mediaDevices.getUserMedia(videoconfig).then(stream => { 
      video.srcObject = stream,
      canales = stream.getTracks();
      ;
    }).catch(console.error)
  }
  else{
    canales.forEach(track => track.stop())
    cambioCamara = "user";
    console.log("Camara= ",cambioCamara);
    videoconfig = {audio: false,
      video: {facingMode: cambioCamara, autoPlay={true},
playsInline={true}, muted={true} }
    }; navigator.mediaDevices.getUserMedia(videoconfig).then(stream => { 
      video.srcObject = stream,
      canales = stream.getTracks();
      ;
    }).catch(console.error)
  }
};

function capturar() {
 
  var ubicacion = document.getElementById("pantalla");
  const referencia = document.getElementById("vortice");
  ubicacion.insertBefore(lienzo, referencia);
  var contexto = lienzo.getContext('2d');
  contexto.drawImage(video, 0, 0, ancho, altopantalla);
  contexto.drawImage(vortice, centro, 0, (vortice.width), (vortice.height));
  document.getElementById('modo').style.display = "none"; // en la seccion "modo" se altera la propiedad css display
  document.getElementById('captura').style.display = "none"; // en la seccion "limpiar" se altera la propiedad css display
  document.getElementById('limpiar').style.display = "inline-block"; // en la seccion "limpiar" se altera la propiedad css display
  document.getElementById('guardar').style.display = "inline-block"; // en la seccion "guardar" se altera la propiedad css display

};

function limpiar() { 
 lienzo.width=lienzo.width;
 document.getElementById('limpiar').style.display = "none"; // en la seccion "limpiar" se altera la propiedad css display
 document.getElementById('guardar').style.display = "none"; // en la seccion "guardar" se altera la propiedad css display
 document.getElementById('modo').style.display = "inline-block"; // en la seccion "modo" se altera la propiedad css display
 document.getElementById('captura').style.display = "inline-block"; // en la seccion "capturar" se altera la propiedad css display

};

function guardar() { 
let enlace = document.createElement('a');
      // El título
      enlace.download = Date.now();
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = lienzo.toDataURL();
      // Hacer click en él
      enlace.click();
};
