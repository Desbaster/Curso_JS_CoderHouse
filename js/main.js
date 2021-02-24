// Declaracion y asignacion de variables
alert ("¡Hola!, te pedimos que por favor ingrese los siguientes datos:");
let nombre = prompt ("Ingrese su Nombre:");
let apellido = prompt ("Ingrese su Apellido:");
let edadTexto = prompt ("Ingrese su Edad:");
const año = 2021;

//Conversion
let edadPrompt = parseInt(edadTexto);

//Concatenar nombre y apellido
let nombreCompleto = (nombre + " " + apellido);
let añoNacimiento = (año - edadPrompt);
let añoNacimiento1 = (año - edadPrompt - 1);

//Valores de salida
alert("Hola " + nombreCompleto + ", si no has cumplido años aun tu año de nacimiento es: " + añoNacimiento1 +  ".");
alert("Hola " + nombreCompleto + ", si ya cumpliste años tu año de nacimiento es: " + añoNacimiento + ".");
