/*Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes,
Franco Suizo, Corona Noruega, según opción. El programa debe controlar todas las
entradas y ofrecer al usuario la posibilidad de repetir o salir.*/


const tasaDolar = 1.1;
const tasaLibra = 0.86;
const tasaYen = 157.9;
const tasaFrancoSuizo = 0.96;
const tasaCoronaNoruega = 11.4;

let continuar = true;

while (continuar) {

    let euros = parseFloat(prompt("Introduce la cantidad en Euros:"));
    
    if (isNaN(euros) || euros <= 0) {
        alert("Por favor, introduce una cantidad válida y positiva.");
        continue;
    }

    let opcion = prompt(
        "Selecciona la moneda a la que quieres convertir:\n" +
        "1. Dólares\n" +
        "2. Libras\n" +
        "3. Yenes\n" +
        "4. Franco Suizo\n" +
        "5. Corona Noruega\n" +
        "Introduce el número de la opción:"
    );

    let resultado;

    switch (opcion) {
        case '1':
            resultado = euros * tasaDolar;
            alert(euros + " Euros son " + resultado.toFixed(2) + " Dólares.");
            break;
        case '2':
            resultado = euros * tasaLibra;
            alert(euros + " Euros son " + resultado.toFixed(2) + " Libras.");
            break;
        case '3':
            resultado = euros * tasaYen;
            alert(euros + " Euros son " + resultado.toFixed(2) + " Yenes.");
            break;
        case '4':
            resultado = euros * tasaFrancoSuizo;
            alert(euros + " Euros son " + resultado.toFixed(2) + " Francos Suizos.");
            break;
        case '5':
            resultado = euros * tasaCoronaNoruega;
            alert(euros + " Euros son " + resultado.toFixed(2) + " Coronas Noruegas.");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción entre 1 y 5.");
            continue;
    }

    let repetir = prompt("¿Deseas realizar otra conversión? (sí/no):").toLowerCase();

    if (repetir !== "sí") {
        continuar = false;
        alert("Gracias por usar el convertidor. ¡Adiós!");
    }
}
