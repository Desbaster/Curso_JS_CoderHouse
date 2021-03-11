class Paciente {
    constructor(nombre, pesoEnKg, altura) {
        this.nombre = nombre.toUpperCase();
        this.pesoEnKg = parseInt (pesoEnKg);
        this.altura = parseFloat (altura);
    }
    ingresarNombre () {
        this.nombre = prompt("Ingresa tu Nombre?");
    }
    ingresarPeso () {
        this.pesoEnKg = parseInt (prompt("Ingresa tu peso en kilogramos?"));
    }
    ingresarAltura () {
        this.altura = parseFloat (prompt("Ingresa tu estatura en metros?"));
    }
}

const Paciente1 = new Paciente("joel", 65, 1.70);
const Paciente2 = new Paciente("patric", 58, 1.65);
Paciente1.ingresarNombre();
Paciente1.ingresarPeso();
Paciente1.ingresarAltura();

//Funcion
function peso (kg,m){
    return kg / (m * m);    
}

//Calculo y convercion
const resultado = peso(Paciente1.pesoEnKg , Paciente1.altura);
const redondo = resultado.toFixed(2);

if (resultado < 18.5) {
    alert (Paciente1.nombre + " tu IMC= " + redondo + " y es demasiado bajo, consulta a tu nutricionista");
    } else if (resultado >= 18.5 && resultado < 25){
        alert (Paciente1.nombre + " tu IMC= " + redondo + " y es normal, manten una dieta saludable.");
    } else if (resultado >= 25 && resultado < 30){
        alert (Paciente1.nombre + " tu IMC= " + redondo + " y tienes sobrepeso , consulte a tu nutricionista.");    
    }  else if (resultado >= 30){
        alert (Paciente1.nombre + " tu IMC= " + redondo + " y  estas obeso, debes consultar a tu nutricionista.");
    } 


    
    


    /* Funcion
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
    */