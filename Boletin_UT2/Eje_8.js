/*Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus
cuadrados, sus cubos y la suma de todos ellos.*/

const n = parseInt(prompt("Introduce el valor de n:"));

let sumaNumeros = 0;
let sumaCuadrados = 0;
let sumaCubos = 0;

let resultado = "Número\tCuadrado\tCubo\n";
for (let i = 1; i <= n; i++) {
    let cuadrado = i * i;
    let cubo = i * i * i;
    
    sumaNumeros += i;
    sumaCuadrados += cuadrado;
    sumaCubos += cubo;
    
    resultado += i + "\t" + cuadrado + "\t\t" + cubo + "\n";
}

alert(resultado);

alert("Suma de los números: " + sumaNumeros);
alert("Suma de los cuadrados: " + sumaCuadrados);
alert("Suma de los cubos: " + sumaCubos);
