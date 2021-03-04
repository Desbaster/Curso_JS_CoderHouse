//Declaracion y asignacion de variables
alert ("¡Hola!, te pedimos que por favor ingrese los siguientes datos:");
let nombre = prompt ("Ingrese su Nombre:");
let apellido = prompt ("Ingrese su Apellido:");
let edadTexto = prompt ("Ingrese su Edad:");
let cumpleanios = prompt ("¿Ya cumpliste año?")
const año = 2021;

//Conversion
let edadPrompt = parseInt(edadTexto);

//Concatenar nombre y apellido
let nombreCompleto = (nombre + " " + apellido);

if (cumpleanios == "si" || cumpleanios == "Si" || cumpleanios == "SI" || cumpleanios == "sI") {
    var añoNacimiento = (año - edadPrompt);
    alert("Hola " + nombreCompleto + ", tu año de nacimiento es: " + añoNacimiento +  ".");
}else {
    var añoNacimiento1 = (año - edadPrompt - 1);
    alert("Hola " + nombreCompleto + ", tu año de nacimiento es: " + añoNacimiento1 + ".");
}

alert ("Bienvenido "+ nombreCompleto + ", el día de hoy estamos relizando un sorteo en el que obtendras un fabuloso premio, debes elegir un numero entre 1 y 100, tendras tres oportunidades para acertar, SUERTE!");

for (sorteo=1; sorteo<=3; sorteo++) {
    let numero = parseInt(prompt ("Ingresa tu numero, SUERTE!:"));
    if (numero == edadPrompt) {
        alert("Felicitaciones eres el afortunado ganador de nuestro premio");
        break;
    }
    alert(numero + " no es el numero premiado.");
}


