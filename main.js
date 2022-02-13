"use strict";

//document.querySelector("h1").innerHTML = "Hola mundo";

//Declaracion de variables
let nombreColegio;
//Asignar valor
nombreColegio = "Colegio Diego";
nombreColegio = "Barrio florencia";
console.log(nombreColegio);

//Ejemplo de variables con operación
let totalHoras;
totalHoras = 10 + 20 + 30;
//alert(totalHoras);

//utilizar variables
let blusa = 15000;
let pantalon = 53000;
let totalCompra = blusa + pantalon;
console.log(totalCompra);

//Asignar constante
const ejemploConstante = "Calle de Medellín";
console.log(ejemploConstante);

//Ejemplo con constante
const notaUno = 5;
const notaDos = 4;
const notaTres = 3;
const cantidadNotas = 3;
const totalNotas = notaUno + notaDos + notaTres;
const resultado = totalNotas / cantidadNotas;
console.log("este es el resultado: " + resultado);

//Ejemplo llamando el selector
//document.querySelector("h1").innerHTML = "Aqui llamamos el selector";

//Ejemplo llamando el id
//document.querySelector("#titulo").innerHTML = "Aqui llamamos el id";

//Ejemplo llamando la clase
//document.querySelector(".tituloClase").innerHTML = "Aqui llamamos la clase";

//Ejemplo de modificación de contenido
//const tituloBienvenida = document.querySelector(".tituloBienvenida");
//cambiar su contenido
//tituloBienvenida.innerHTML = "BIENVENIDOS TODOS";

//Ejemplo agregando clase
//const sectionB = document.querySelector(".section-b");
//sectionB.classList.add("hidden");

//Ejemplo eliminando clase
const sectionA = document.querySelector(".section-a");
const sectionB = document.querySelector(".section-b");

sectionA.classList.add("hidden");
sectionB.classList.remove("hidden");

//ejemplo llamando el id
const id = document.querySelector("#tituloid");
console.log("este es el id con query selector " + id.innerHTML);

const id2 = document.getElementById("tituloid");
console.log("aqui muestra el id con byid " + id2.innerHTML);

//ejemplo de var
var variable;
variable = "hola";
console.log(variable);
