const video = document.getElementById("video");

  function startup() {

    var alto = window.innerHeight; 
    var ancho = window.innerWidth;
    var altocomandos = alto*0.1;
    var altofinal = alto*0.05;
    var altopantalla = ancho*1.33;
    var altovideo = ancho*1.33;
    var altosuperior = (alto-altopantalla-altocomandos-altofinal)/2;
    var altoinferior = (alto-altopantalla-altocomandos-altofinal)/2;
    var centro = (ancho-(ancho*0.3))/2;

    var total = altosuperior+altopantalla+altoinferior+altocomandos+altofinal;

navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
       facingMode: "environment",
       width: ancho, 
       height: altovideo }
    }
    ).then(stream => {
      video.srcObject = stream;
    
    }).catch(console.error)

    console.log("alto= ",alto);
    console.log("ancho= ",ancho);
    console.log("alto superior= ",altosuperior);
    console.log("alto pantalla= ",altopantalla);
    console.log("alto inferior= ",altoinferior);
    console.log("alto comandos= ",altocomandos);
    console.log("alto final= ",altofinal);
    console.log("alto total= ",total);
   

   document.getElementById("modo").value="modo"; // se incluye el dato de las horas en el atributo value para mostrarse en la app
   document.getElementById("captura").value="captura"; // se incluye el dato de las horas en el atributo value para mostrarse en la a

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
   document.getElementById('comandos').style.height = altocomandos + "px"; // en la seccion "<comandos" se altera la propiedad css heigth
   document.getElementById('comandos').style.width = ancho + "px"; // en la seccion "comandos" se altera la propiedad css width 
   document.getElementById('final').style.height = altofinal + "px"; // en la seccion "final" se altera la propiedad css heigth
   document.getElementById('final').style.width = ancho + "px"; // en la seccion "final" se altera la propiedad css width 
   document.getElementById('vortice').style.top = altoinferior + "px"; // en la seccion "final" se altera la propiedad css heigth
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


