// Declaramos Arrays
const pacientes = []; 
let cantidad = 2; 

//Declarando clase
class Paciente {
    constructor(nombre, pesoEnKg, altura) {
        this.nombre = nombre;
        this.pesoEnKg = pesoEnKg;
        this.altura = altura;
    }
}

//Iteracion
do {
    let nombre = prompt("Ingresa tu Nombre?");
    let pesoEnKg = parseInt (prompt("Ingresa tu peso en kilogramos?"));
    let altura = parseFloat (prompt("Ingresa tu estatura en metros?"));
    pacientes.push (new Paciente (nombre, pesoEnKg, altura));
}while (pacientes.length != cantidad)


//Imprimiendo en consola  elementos de los arrays
console.log (pacientes[0]);
console.log (pacientes[1]);
console.log (pacientes[0].nombre);
console.log (pacientes[1].nombre);
console.log (pacientes[0].pesoEnKg);
console.log (pacientes[1].pesoEnKg);
console.log (pacientes[0].altura);
console.log (pacientes[1].altura);


//Funcion
function imc (kg,m){
    return kg / (m * m);    
}

//Calculo y convercion
const resultado1 = imc(pacientes[0].pesoEnKg , pacientes[0].altura);
const resultado2 = imc(pacientes[1].pesoEnKg , pacientes[1].altura);
const redondo1 = resultado1.toFixed(2);
const redondo2 = resultado2.toFixed(2);

//Condicionales
if (resultado1 < 18.5) {
    alert ("Hola " + pacientes[0].nombre.toUpperCase() + " tu IMC= " + redondo1 + " y es demasiado bajo, consulta a tu nutricionista");
    } else if (resultado1 >= 18.5 && resultado1 < 25) {
        alert ("Hola " + pacientes[0].nombre.toUpperCase() + " tu IMC= " + redondo1 + " y es normal, manten una dieta saludable.");
    } else if (resultado1 >= 25 && resultado1 < 30) {
        alert ("Hola " + pacientes[0].nombre.toUpperCase() + " tu IMC= " + redondo1 + " y tienes sobrepeso , consulte a tu nutricionista.");    
    }  else if (resultado1 >= 30) {
        alert ("Hola " + pacientes[0].nombre.toUpperCase() + " tu IMC= " + redondo1 + " y  estas obeso, debes consultar a tu nutricionista.");
    } 

    if (resultado2 < 18.5) {
        alert ("Hola " + pacientes[1].nombre.toUpperCase() + " tu IMC= " + redondo2 + " y es demasiado bajo, consulta a tu nutricionista");
        } else if (resultado2 >= 18.5 && resultado2 < 25) {
            alert ("Hola " + pacientes[1].nombre.toUpperCase() + " tu IMC= " + redondo2 + " y es normal, manten una dieta saludable.");
        } else if (resultado2 >= 25 && resultado2 < 30) {
            alert ("Hola " + pacientes[1].nombre.toUpperCase() + " tu IMC= " + redondo2 + " y tienes sobrepeso , consulte a tu nutricionista.");    
        }  else if (resultado2 >= 30) {
            alert ("Hola " + pacientes[1].nombre.toUpperCase() + " tu IMC= " + redondo2 + " y  estas obeso, debes consultar a tu nutricionista.");
        } 