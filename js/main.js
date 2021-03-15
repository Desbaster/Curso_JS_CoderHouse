// Declaramos Arrays
const nombres = [];
const pesos = [];
const alturas = [];
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
    if (nombre == ""){
            break;
        }
    let pesoEnKg = parseInt (prompt("Ingresa tu peso en kilogramos?"));
    let altura = parseFloat (prompt("Ingresa tu estatura en metros?"));
    nombres.push (nombre);
    pesos.push (pesoEnKg);
    alturas.push (altura);

}while (nombres.length != cantidad)

//Imprimiendo en consola  elementos de los arrays
console.log (nombres[0]);
console.log (nombres[1]);
console.log (pesos[0]);
console.log (pesos[1]);
console.log (alturas[0]);
console.log (alturas[1]);

//Funcion
function imc (kg,m){
    return kg / (m * m);    
}

//Calculo y convercion
const resultado1 = imc(pesos[0] , alturas[0]);
const resultado2 = imc(pesos[1] , alturas[1]);
const redondo1 = resultado1.toFixed(2);
const redondo2 = resultado2.toFixed(2);

//Condicionales
if (resultado1 < 18.5) {
    alert ("Hola " + nombres[0].toUpperCase() + " tu IMC= " + redondo1 + " y es demasiado bajo, consulta a tu nutricionista");
    } else if (resultado1 >= 18.5 && resultado1 < 25) {
        alert ("Hola " + nombres[0].toUpperCase() + " tu IMC= " + redondo1 + " y es normal, manten una dieta saludable.");
    } else if (resultado1 >= 25 && resultado1 < 30) {
        alert ("Hola " + nombres[0].toUpperCase() + " tu IMC= " + redondo1 + " y tienes sobrepeso , consulte a tu nutricionista.");    
    }  else if (resultado1 >= 30) {
        alert ("Hola " + nombres[0].toUpperCase() + " tu IMC= " + redondo1 + " y  estas obeso, debes consultar a tu nutricionista.");
    } 

    if (resultado2 < 18.5) {
        alert ("Hola " + nombres[1].toUpperCase() + " tu IMC= " + redondo2 + " y es demasiado bajo, consulta a tu nutricionista");
        } else if (resultado2 >= 18.5 && resultado2 < 25) {
            alert ("Hola " + nombres[1].toUpperCase() + " tu IMC= " + redondo2 + " y es normal, manten una dieta saludable.");
        } else if (resultado2 >= 25 && resultado2 < 30) {
            alert ("Hola " + nombres[1].toUpperCase() + " tu IMC= " + redondo2 + " y tienes sobrepeso , consulte a tu nutricionista.");    
        }  else if (resultado2 >= 30) {
            alert ("Hola " + nombres[1].toUpperCase() + " tu IMC= " + redondo2 + " y  estas obeso, debes consultar a tu nutricionista.");
        } 