// Declaracion y asignacion de variables
alert ("¡Hola!, te pedimos que por favor ingrese los siguientes datos:");
let nombre = prompt ("Ingrese su Nombre:");
let apellido = prompt ("Ingrese su Apellido:");
let edadTexto = prompt ("Ingrese su Edad:");
let cumpleanos = prompt (`¿Ya cumpliste año? responde "si" o "no" en minuscula por favor.`)
const año = 2021;

//Conversion
let edadPrompt = parseInt(edadTexto);

//Concatenar nombre y apellido
let nombreCompleto = (nombre + " " + apellido);

if (cumpleanos == "si") {
    var añoNacimiento = (año - edadPrompt);
    alert("Hola " + nombreCompleto + ", tu año de nacimiento es: " + añoNacimiento +  ".");
}else {
    var añoNacimiento1 = (año - edadPrompt - 1);
    alert("Hola " + nombreCompleto + ", tu año de nacimiento es: " + añoNacimiento1 + ".");
}

