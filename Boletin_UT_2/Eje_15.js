/*Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la
entrada estándar, calcule cuál es el número mínimo de monedas de curso legal que
equivalen a dicha cantidad de dinero*/

let continuar = true;

while (continuar) {
    
    let cantidad = parseFloat(prompt("Introduce la cantidad de dinero en euros (entre 0 y 1000):"));

    if (isNaN(cantidad) || cantidad < 0 || cantidad > 1000) {
        alert("Cantidad inválida. Debe estar entre 0 y 1000 euros.");
        continue;
    }

    let cantidadCentimos = Math.round(cantidad * 100);

    const monedas = [200, 100, 50, 20, 10, 5, 2, 1];
    let resultado = {};

    for (let i = 0; i < monedas.length; i++) {
        let denominacion = monedas[i];
        if (cantidadCentimos >= denominacion) {
            let cantidadMonedas = Math.floor(cantidadCentimos / denominacion);
            cantidadCentimos -= cantidadMonedas * denominacion;
            resultado[denominacion] = cantidadMonedas;
        }
    }

    let mensaje = "Número mínimo de monedas:\n";
    for (let i = 0; i < monedas.length; i++) {
        let denominacion = monedas[i];
        if (resultado[denominacion]) {
            mensaje += `${resultado[denominacion]} monedas de ${denominacion / 100} euros\n`;
        }
    }

    alert(mensaje);

    let repetir = prompt("¿Deseas calcular otra cantidad de dinero? (sí/no):").toLowerCase();
    if (repetir !== "sí") {
        alert("Gracias por usar el programa. ¡Adiós!");
        continuar = false;
    }
}
