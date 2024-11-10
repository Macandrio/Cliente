/*Escribir un subprograma que produzca una tabla de valores de la ecuación*/

function generarTablaValores() {
    var incremento = parseFloat(window.prompt("Ingresa el valor del incremento de t (debe ser un número positivo):"));
    if (incremento <= 0 || isNaN(incremento)) {
        document.write("El incremento debe ser un número positivo.");
        return;
    }

    document.write("<h2>Tabla de valores para la ecuación</h2>");
    document.write("<table border='1'><tr><th>t</th><th>Resultado de la ecuación</th></tr>");

    // Generar la tabla de valores con t variando entre 0 y 60
    for (var t = 0; t <= 60; t += incremento) {
        var resultado = calcularEcuacion(t);  // Aquí defines la ecuación que quieras evaluar
        document.write("<tr><td>" + t + "</td><td>" + resultado.toFixed(2) + "</td></tr>");
    }

    document.write("</table>");
}

function calcularEcuacion(t) {
    // Ejemplo de ecuación: y = 2t + 3 (puedes cambiar esta ecuación)
    return 2 * t + 3;
}

generarTablaValores();
