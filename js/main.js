class Paciente {
    constructor(nombre, pesoEnKg, altura) {
        this.nombre = nombre;
        this.pesoEnKg = pesoEnKg;
        this.altura = altura;
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
Paciente1.ingresarNombre();
Paciente1.ingresarPeso();
Paciente1.ingresarAltura();

let upperNombre = Paciente1["nombre"].toUpperCase();

//Funcion
function peso (kg,m){
    return kg / (m * m);    
}

//Calculo y convercion
const resultado = peso(Paciente1.pesoEnKg , Paciente1.altura);
const redondo = resultado.toFixed(2);

if (resultado < 18.5) {
    alert ("Hola " + upperNombre + " tu IMC= " + redondo + " y es demasiado bajo, consulta a tu nutricionista");
    } else if (resultado >= 18.5 && resultado < 25) {
        alert ("Hola " + upperNombre + " tu IMC= " + redondo + "y es normal, manten una dieta saludable.");
    } else if (resultado >= 25 && resultado < 30) {
        alert ("Hola " + upperNombre + " tu IMC= " + redondo + " y tienes sobrepeso , consulte a tu nutricionista.");    
    }  else if (resultado >= 30) {
        alert ("Hola " + upperNombre + " tu IMC= " + redondo + " y  estas obeso, debes consultar a tu nutricionista.");
    } 
