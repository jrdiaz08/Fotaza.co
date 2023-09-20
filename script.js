const video = document.getElementById("video");
  function startup() {
  var ancho = window.innerWidth;
  var alto = window.innerHeight;
  console.log(ancho);
  console.log(alto); 
  var anchovideo = ancho;
  var altovideo = ancho*1.33;
  var altorestante = alto-altovideo;
  var altocomandos = altorestante*0.8;
  var altofinal = altorestante*0.2;
    
  document.getElementById('fondo').style.width=ancho; // en la seccion "fondo" se altera la propiedad css width 
  document.getElementById('fondo').style.heigth=alto; // en la seccion "fondo" se altera la propiedad css heigth
    
  document.getElementById('pantalla').style.width=ancho; // en la seccion "pantalla" se altera la propiedad css width 
  document.getElementById('pantalla').style.heigth=altovideo; // en la seccion "pantalla" se altera la propiedad css heigth
  
  document.getElementById('comandos').style.width=ancho; // en la seccion "comandos" se altera la propiedad css width 
  document.getElementById('comandos').style.heigth=altocomandos; // en la seccion "<comandos" se altera la propiedad css heigth

  document.getElementById('final').style.width=ancho; // en la seccion "final" se altera la propiedad css width 
  document.getElementById('final').style.heigth=altofinal; // en la seccion "final" se altera la propiedad css heigth

  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { width: anchovideo, height: altovideo },
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


