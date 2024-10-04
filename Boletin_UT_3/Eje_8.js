/*Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se
lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR,
RADAR.*/

function esPalindromo(palabra) {
    // Convertimos la palabra a minúsculas y eliminamos los espacios
    let palabraNormalizada = palabra.toLowerCase().replace(/\s+/g, '');

    // Invertimos la palabra
    let palabraInvertida = palabraNormalizada.split('').reverse().join('');

    // Comparamos la palabra normalizada con la invertida
    return palabraNormalizada === palabraInvertida;
}

function comprobarPalindromo() {
    let palabra = prompt("Introduce una palabra:");

    // Comprobamos si la palabra es un palíndromo
    if (esPalindromo(palabra)) {
        alert("La palabra '" + palabra + "' es un palíndromo.");
    } else {
        alert("La palabra '" + palabra + "' no es un palíndromo.");
    }
}

// Llamamos a la función para ejecutarla
comprobarPalindromo();
