function mostrarMenu() {
    var opcion = parseInt(window.prompt(
        "Selecciona una opción:\n" +
        "1. Redondeo al número más cercano\n" +
        "2. Redondeo al inmediato superior\n" +
        "3. Redondeo al inmediato inferior\n" +
        "4. Cálculo del número máximo entre dos dados\n" +
        "5. Cálculo del número mínimo entre dos dados\n" +
        "6. Cálculo de un número elevado a otro\n" +
        "7. Cálculo de la raíz cuadrada de un número\n" +
        "8. Salir"
    ));

    switch (opcion) {
        case 1:
            var numero = parseFloat(window.prompt("Ingresa un número para redondear al más cercano:"));
            document.write("El número " + numero + " redondeado al más cercano es: " + Math.round(numero));
            break;
        case 2:
            var numero = parseFloat(window.prompt("Ingresa un número para redondear al inmediato superior:"));
            document.write("El número " + numero + " redondeado al inmediato superior es: " + Math.ceil(numero));
            break;
        case 3:
            var numero = parseFloat(window.prompt("Ingresa un número para redondear al inmediato inferior:"));
            document.write("El número " + numero + " redondeado al inmediato inferior es: " + Math.floor(numero));
            break;
        case 4:
            var num1 = parseFloat(window.prompt("Ingresa el primer número:"));
            var num2 = parseFloat(window.prompt("Ingresa el segundo número:"));
            document.write("El máximo entre " + num1 + " y " + num2 + " es: " + Math.max(num1, num2));
            break;
        case 5:
            var num1 = parseFloat(window.prompt("Ingresa el primer número:"));
            var num2 = parseFloat(window.prompt("Ingresa el segundo número:"));
            document.write("El mínimo entre " + num1 + " y " + num2 + " es: " + Math.min(num1, num2));
            break;
        case 6:
            var base = parseFloat(window.prompt("Ingresa la base:"));
            var exponente = parseFloat(window.prompt("Ingresa el exponente:"));
            document.write(base + " elevado a la potencia de " + exponente + " es: " + Math.pow(base, exponente));
            break;
        case 7:
            var numero = parseFloat(window.prompt("Ingresa un número para calcular la raíz cuadrada:"));
            if (numero >= 0) {
                document.write("La raíz cuadrada de " + numero + " es: " + Math.sqrt(numero));
            } else {
                document.write("No se puede calcular la raíz cuadrada de un número negativo.");
            }
            break;
        case 8:
            document.write("Saliendo del programa...");
            break;
        default:
            document.write("Opción no válida. Por favor, selecciona un número entre 1 y 8.");
    }
}

mostrarMenu();
