/*Un proyectil disparado a un ángulo  A tiene un alcance horizontal  R dado por la
siguiente expresión:*/

function calcularAlcance() {
    var V = parseFloat(window.prompt("Ingresa la velocidad inicial (m/s):"));
    if (V <= 0 || isNaN(V)) {
        document.write("La velocidad debe ser un valor positivo.");
        return;
    }

    var A = parseFloat(window.prompt("Ingresa el ángulo de disparo (en grados, entre 0 y 90):"));
    if (A < 0 || A > 90 || isNaN(A)) {
        document.write("El ángulo debe estar entre 0 y 90 grados.");
        return;
    }

    var G = 9.8;  // Aceleración de la gravedad en m/s²
    var AEnRadianes = A * (Math.PI / 180);  // Conversión de grados a radianes

    // Fórmula del alcance horizontal: R = (V^2 * sin(2 * A)) / G
    var alcance = (Math.pow(V, 2) * Math.sin(2 * AEnRadianes)) / G;

    document.write("El alcance horizontal del proyectil es: " + alcance.toFixed(2) + " metros.");
}

calcularAlcance();
