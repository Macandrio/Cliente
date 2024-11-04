/*Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de
teclado*/

let numero;
let suma = 0;
let contador = 0;
let menor = null;
let mayor = null;

do {
    numero = parseFloat(prompt("Introduce un número positivo (o un número negativo para terminar):"));

    if (numero >= 0) {
        if (menor === null || numero < menor) {
            menor = numero;
        }

        if (mayor === null || numero > mayor) {
            mayor = numero;
        }

        suma += numero;
        contador++;
    }
} while (numero >= 0);

if (contador > 0) {
    let media = suma / contador;

    alert("El número menor es: " + menor);
    alert("El número mayor es: " + mayor);
    alert("La media de los números es: " + media);
} else {
    alert("No ingresaste ningún número positivo.");
}