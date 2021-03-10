// Funcion
function peso (kg,m){
    return kg / (m * m);    
}

//Valores de entrada
const nombre = prompt("Ingresa tu Nombre?");
const pesoEnKg = parseInt (prompt("Ingresa tu peso en kilogramos?"));
const altura = parseFloat (prompt("Ingresa tu estatura en metros?"));

//Calculo y convercion
const resultado = peso(pesoEnKg, altura);
const redondo = resultado.toFixed(2);

console.log(redondo);

if (resultado < 18.5) {
    alert (nombre + " tu IMC= " + redondo + " y es demasiado bajo, consulta a tu nutricionista");
    } else if (resultado >= 18.5 && resultado < 25){
        alert (nombre + " tu IMC= " + redondo + " y es normal, manten una dieta saludable.");
    } else if (resultado >= 25 && resultado < 30){
        alert (nombre + " tu IMC= " + redondo + " y tienes sobrepeso , consulte a tu nutricionista.");    
    }  else if (resultado >= 30){
        alert (nombre + " tu IMC= " + redondo + " y  estas obeso, debes consultar a tu nutricionista.");
    }  
