//Declaracionesç
var variable = 0;    //Declara una variable
let variable2 = 0;   //Declara una variable de bloque
const variable3 = 0; //Declara una constante de bloque

                                                    /*----- prompt -----*/


var num = window.prompt('Ingresa un número');

                                                    /*----- Operadores -----*/

document.write(5 == "5");  // true Verifica si dos valores son iguales (sin verificar el tipo de dato).

document.write(5 === "5");  // false Verifica si dos valores son iguales en valor y tipo.

document.write(5 != "5");  // false Verifica si dos valores son distintos (sin verificar el tipo de dato).

document.write(5 !== "5");  // false Verifica si dos valores son distintos en valor y tipo

document.write(true && false);  // false  Devuelve true si ambas condiciones son verdaderas

document.write(true || false);  // true Devuelve true si al menos una de las condiciones es verdadera.

document.write(!true);  // false Invierte el valor de una expresión booleana

                                                    /*----- Operador Ternario -----*/


let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
document.write(mensaje);  // "Eres mayor de edad"




                                                    /*----- if -----*/

var pares = 2;
if (pares % 2 == 0) {
    alert('El número es par')
}else(
    alert('El número es impar')
)

                                                    /*----- switch -----*/

let dia = 3;

switch(dia) {
    case 1:
        alert('Lunes');
        break;
    case 2:
        alert('Martes');
        break;
    case 3:
        alert('Miércoles');
        break;
    case 4:
        alert('Jueves');
        break;
    case 5:
        alert('Viernes');
        break;
    case 6:
        alert('Sábado');
        break;
    case 7:
        alert('Domingo');
        break;
    default:
        alert('Día inválido');
        break;
}

/*----- For -----*/

for (let i = 1; i <= 5; i++) {
    alert(i);
}

                                                    /*----- Funcion -----*/

function sumar(a, b) {
    return a + b;
}


// Llamamos a la función con dos números
document.write("El resultado de la suma es: " + sumar(3, 7));


                                                    /*----- Try...Catch -----*/

function dividir(a, b) {
    try {
        
        if (b === 0) {
            throw new Error("No se puede dividir por 0");
        }
        let resultado = a / b;
        alert("El resultado de la división es: " + resultado);

    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Llamamos a la función
dividir(10, 0);


                                                    /*----- Match -----*/

//para el numero pi

let PI = Math.PI;

// convierte los numero en negativo en positivo
let valorAbsoluto = Math.abs(numero);

//para elevar un numero por ejemplo
let base = 3;
let exponente = 2;
let potencia = Math.pow(base, exponente); //sale un 9 = 3 * 3

//devuelve la raiz cuadrada de un numero

let raizCuadrada = Math.sqrt(numero);

//redondea

let numero = 5.7;
document.write(Math.round(numero));  // saca el numero mas cercano.
document.write(Math.floor(numero));  // Redondea hacia abajo, al entero más cercano.
document.write(Math.ceil(numero));   // Redondea hacia arriba, al entero más cercano.

//debuelve el numero mas grande y el mas pequeo 

let maximo = Math.max(1, 5, 3, 9, 2);
let minimo = Math.min(1, 5, 3, 9, 2);


// numeros aleatorio

let numeroAleatorio = Math.floor(Math.random() * 10) + 1; //genera del 1 al 10 necesita floor para redondea hacia abajo

//quita los decimales

numero = -5.7;
document.write(Math.trunc(numero));  // Salida: -5


//convertir string en numeros

numero = parseInt("42");
document.write(numero);  // Salida: 42

let numeroDecimal = parseFloat("3.14159");
document.write(numeroDecimal);  // Salida: 3.14159


//devuelve decimales a los numero que pongas

numero = 123.456;
document.write(numero.toFixed(2));  // "123.46"
document.write(numero.toFixed(0));  // "123" (sin decimales)
document.write(numero.toFixed(4));  // "123.4560" (4 decimales)

                                                    /*----- Cadena -----*/

let cadena = 'Alejadandro es el mejor'
document.write(cadena.toLowerCase()); // convierte a minuscula 

document.write(cadena.toUpperCase()); // convierte a mayusculas la cadena


