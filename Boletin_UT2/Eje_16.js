/*Diseñar un programa que lea de teclado un número entero positivo en base 10 y
escriba su correspondiente representación binaria usando la técnica de divisiones
sucesivas*/

function convertirABinario() {
    let numero = parseInt(prompt("Introduce un número entero positivo:"));

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, introduce un número entero positivo.");
        return;
    }

    let binario = "";

    while (numero > 0) {
        let residuo = numero % 2;
        binario = residuo + binario;
        numero = Math.floor(numero / 2);
    }

    alert("La representación binaria es: " + binario);
}

convertirABinario();
