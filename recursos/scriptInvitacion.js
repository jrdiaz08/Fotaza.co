
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
  };

document.body.onload = function inicio() {
  var alto = window.innerHeight; 
  var ancho = window.innerWidth;
    
  let fallo = document.getElementById("fallo");

  const params = new URLSearchParams(window.location.search);
  const inv = params.get("inv");
  const qpo = params.get("qpo");
  console.log("invitado= ",inv);
  console.log("cupo= ",qpo);
  
  let marcoInvitacion = document.getElementById("marcoInvitacion");
  let esqSupInvitacion = document.getElementById("esqSupInvitacion");
  let nombreNovios= document.getElementById("nombreNovios");
  let palabrasDeInvitacion = document.getElementById("palabrasDeInvitacion");
  let nombreInvitado= document.getElementById("nombreInvitado");
  let detallesCupo1 = document.getElementById("detallesCupo1");
  let detallesCupo2 = document.getElementById("detallesCupo2");
  let click = document.getElementById("click");
  let anillos = document.getElementById("anillos");   
  let esqInfInvitacion = document.getElementById("esqInfInvitacion");
  let masDetalles = document.getElementById("masDetalles");
  let link2 = document.getElementById("link2");

  nombreInvitado.textContent = inv;

  console.log("alto= ",alto);
  console.log("ancho= ",ancho);
    
  fallo.style.width = (ancho*0.5) + "px"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  
  marcoInvitacion.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  esqSupInvitacion.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  nombreNovios.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  palabrasDeInvitacion.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  detallesCupo1.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  detallesCupo2.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  anillos.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  click.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  esqInfInvitacion.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width
  masDetalles.style.opacity = "0"; // en la seccion "fondoInvitacion" se altera la propiedad css width

   if (qpo=="s"){
    detallesCupo= document.getElementById("detallesCupo1");
  }
  if (qpo=="p"){
    detallesCupo= document.getElementById("detallesCupo2");
  }
  
  if (alto>ancho){ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(0)";
        
  }else{ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(1)";
  }
  
let arranque = Date.now(); // recordar la hora de inicio
  let cronometro = setInterval(function() {
    let tiempo = Date.now() - arranque; // ¿Cuánto tiempo pasó desde el principio?
    if (tiempo >= 3000) {
      clearInterval(cronometro); // terminar la animación después de 2 segundos
      return;
    }
    // dibujar la animación en el momento timePassed
    animacion(tiempo);
  }, 20);
  
  // mientras timePassed va de 0 a 3000
  // Opacity obtiene valores de 0 a 1
  function animacion(tiempo) { 
    if (200<=tiempo && tiempo<=1200) {
     marcoInvitacion.style.opacity = (tiempo-200)/1000; // en la seccion "fondoInvitacion" se altera la propiedad css width  
    } 
    if (500<=tiempo && tiempo<=2000) {
      esqSupInvitacion.style.opacity = (tiempo-500)/1500// en la seccion "fondoInvitacion" se altera la propiedad css width
      esqInfInvitacion.style.opacity = (tiempo-500)/1500; // en la seccion "fondoInvitacion" se altera la propiedad css width  
    } 
    if (1000<=tiempo && tiempo<=2200) {
      nombreNovios.style.opacity = (tiempo-1000)/1200;// en la seccion "fondoInvitacion" se altera la propiedad css width
    } 
    if (1500<=tiempo && tiempo<=3000) {
      palabrasDeInvitacion.style.opacity = (tiempo-1500)/1500; // en la seccion "fondoInvitacion" se altera la propiedad css width
    } 
    if (1900<=tiempo && tiempo<=2400) {
      masDetalles.style.opacity = (tiempo-1900)/500; // en la seccion "fondoInvitacion" se altera la propiedad css width
    } 
    if (1000<=tiempo && tiempo<=3000) {
      anillos.style.opacity = (tiempo-1000)/2000; // en la seccion "fondoInvitacion" se altera la propiedad css width
    } 

}
setTimeout(function () { // se ejecuta la funcion una vez se carga la pagina, con un retraso definido
  link2.textContent="Ingresa a 📸Fotaza.co "; // en la seccion Final se agrega texto en el contenedor

 },5000); // el retraso definido en milisegundos

 };
 window.onresize = function() {
  var alto = window.innerHeight; 
  var ancho = window.innerWidth;
    
  let fallo = document.getElementById("fallo");
  fallo.style.width = (ancho*0.5) + "px"; // en la seccion "fondo" se altera la propiedad css width
      
  console.log("alto= ",alto);
  console.log("ancho= ",ancho);
    
  if (alto>ancho){ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(0)";
        
  }else{ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(1)";
  }
} 

function clickAnillo0() {

  document.getElementById("fondoIntro").style.display = "none";
  
}
var masMenosDetalles = 1;

function masDetalles() {

  if(masMenosDetalles == "1"){
    let arranque = Date.now(); // recordar la hora de inicio
    let cronometro = setInterval(function() {
    let tiempo = Date.now() - arranque; // ¿Cuánto tiempo pasó desde el principio?
    if (tiempo >= 2000) {
      clearInterval(cronometro); // terminar la animación después de 1 segundo
      return;
    }
    // dibujar la animación en el momento timePassed
    animacion(tiempo);
    }, 20);
  
    // mientras timePassed va de 0 a 2000
    // opacity obtiene valores de 0 a 1

    function animacion(tiempo) { 
      
     if (0<=tiempo && tiempo<=1200) {
       palabrasDeInvitacion.style.opacity = 1-(tiempo/1200); // en la seccion "fondoInvitacion" se altera la propiedad css width
      } 
     if (800<=tiempo && tiempo<=2000) {
      detallesCupo.style.opacity = (tiempo-800)/1200; // en la seccion "fondoInvitacion" se altera la propiedad css width
      click.style.opacity = (tiempo-800)/1400; // en la seccion "fondoInvitacion" se altera la propiedad css width
    }
    }
   masMenosDetalles = "0";
  }
  else{
    let arranque = Date.now(); // recordar la hora de inicio
    let cronometro = setInterval(function() {
    let tiempo = Date.now() - arranque; // ¿Cuánto tiempo pasó desde el principio?
    if (tiempo >= 2000) {
      clearInterval(cronometro); // terminar la animación después de 1 segundo
      return;
    }
    // dibujar la animación en el momento timePassed
    animacion(tiempo);
    }, 20);
  
    // mientras timePassed va de 0 a 2000
    // opacity obtiene valores de 0 a 1

    function animacion(tiempo) { 
      
     if (0<=tiempo && tiempo<=1200) {
       detallesCupo.style.opacity = 1-(tiempo/1200); // en la seccion "fondoInvitacion" se altera la propiedad css width
       click.style.opacity = 1-(tiempo/1200); // en la seccion "fondoInvitacion" se altera la propiedad css width
     } 
     if (800<=tiempo && tiempo<=2000) {
      palabrasDeInvitacion.style.opacity = (tiempo-800)/1200; // en la seccion "fondoInvitacion" se altera la propiedad css width
      } 
    }
   masMenosDetalles = "1";
  }  
};

