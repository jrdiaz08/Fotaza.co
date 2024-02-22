
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
  
  let isotipoA = document.getElementById("isotipoA");
  let isotipoB = document.getElementById("isotipoB");
  let isologo= document.getElementById("isologo");
  let imagotipoA = document.getElementById("imagotipoA");
  let imagotipoB = document.getElementById("imagotipoB");
      
  console.log("alto= ",alto);
  console.log("ancho= ",ancho);
    
  fallo.style.width = (ancho*0.5) + "px"; // en la seccion "fondo" se altera la propiedad css width
  
  isotipoA.style.width = (ancho*0.15) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoA.style.position ="relative"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoA.style.top = (ancho*-0.070) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoA.style.left= (ancho*0.075) + "px";

  isologo.style.width = (0) + "px"; // en la seccion "fondo" se altera la propiedad css heigth

  isotipoB.style.width = (ancho*0.15) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoB.style.position ="relative"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoB.style.top = (ancho*0.070) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoB.style.right= (ancho*0.075) + "px";

  if (alto>ancho){ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(0)";
        
  }else{ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(1)";
  }
  
let arranque = Date.now(); // recordar la hora de inicio
  let cronometro = setInterval(function() {
    let tiempo = Date.now() - arranque; // ¿Cuánto tiempo pasó desde el principio?
    if (tiempo >= 2000) {
      clearInterval(cronometro); // terminar la animación después de 2 segundos
      return;
    }
    // dibujar la animación en el momento timePassed
    animacion(tiempo);
  }, 20);
  
  // mientras timePassed va de 0 a 2000
  // left obtiene valores de 0px a 400px
  function animacion(tiempo) { 
    if (1000<=tiempo && tiempo<=1510) {
   isologo.style.width = (ancho*(tiempo-1000)*0.001)+'px';
   imagotipoA.style.top = (ancho*-0.065)-((tiempo-1000)*ancho*0.0001) + "px";
   imagotipoB.style.transform = 'rotate('+(((tiempo-1000)/2.78))+'deg)'
   imagotipoB.style.top = (ancho*0.065)+((tiempo-1000)*ancho*0.00006) + "px";
  } 
}
setTimeout(function () { // se ejecuta la funcion una vez se carga la pagina, con un retraso definido
  document.getElementById('loader').style.transform="scale(0)";
  document.getElementById('fondo').style.transform="scale(1)";
   // en la seccion loader se altera la propiedad css escala   
 },2500); // el retraso definido en milisegundos

 };
 window.onresize = function() {
  var alto = window.innerHeight; 
  var ancho = window.innerWidth;
    
  let fallo = document.getElementById("fallo");
  
  let isotipoA = document.getElementById("isotipoA");
  let isotipoB = document.getElementById("isotipoB");
  let isologo= document.getElementById("isologo");
  let imagotipoA = document.getElementById("imagotipoA");
  let imagotipoB = document.getElementById("imagotipoB");
      
  console.log("alto= ",alto);
  console.log("ancho= ",ancho);
    
  fallo.style.width = (ancho*0.5) + "px"; // en la seccion "fondo" se altera la propiedad css width
  
  isotipoA.style.width = (ancho*0.15) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoA.style.position ="relative"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoA.style.top = (ancho*-0.070) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoA.style.left= (ancho*0.075) + "px";

  isologo.style.width = (0) + "px"; // en la seccion "fondo" se altera la propiedad css heigth

  isotipoB.style.width = (ancho*0.15) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoB.style.position ="relative"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoB.style.top = (ancho*0.070) + "px"; // en la seccion "fondo" se altera la propiedad css width
  imagotipoB.style.right= (ancho*0.075) + "px";

  if (alto>ancho){ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(0)";
        
  }else{ // condicional que se cumple si...
    document.getElementById('orientacion').style.transform="scale(1)";
  }
} 


