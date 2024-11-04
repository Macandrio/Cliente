/*Elabora un programa que dado un precio y una cantidad pagada, obtengamos el
cambio con el mínimo número de elementos (monedas o billetes). Para devolver el
cambio disponemos de una cantidad ilimitada de monedas y de billetes */

const denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1];


var precio = window.prompt('Indique el precio');
var cantidadPagada = window.prompt('Indique el pago');

let cambio = cantidadPagada - precio;

if (cambio < 0) {
    alert("La cantidad pagada es insuficiente.");
} else if (cambio === 0) {
    alert("No hay cambio que devolver.");
} else {
    let resultado = [];
    
    for (let i = 0; i < denominaciones.length; i++) {
        let cantidadDenominacion = Math.floor(cambio / denominaciones[i]);
        if (cantidadDenominacion > 0) {
            resultado += cantidadDenominacion + " de " + denominaciones[i] + " Euros\n";
            cambio = (cambio % denominaciones[i]).toFixed(2);
        }
    }
    
    alert("Cambio a devolver:\n" + resultado);
}
