/*Para comprobar si un año es o no bisiesto se usa la siguiente regla: “Un año es
bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. Diseñar un
programa que utilizando una variable lógica que tenga valor cierto si el año es
bisiesto y falso si no lo es.*/

function esBisiesto(anio) {
    let bisiesto;

    if (anio % 400 == 0) {
        bisiesto = true;
    } else if (anio % 100 == 0) {
        bisiesto = false;
    } else if (anio % 4 == 0) {
        bisiesto = true;
    } else {
        bisiesto = false;
    }

    return bisiesto;
}

var anio = window.prompt('Ingresa un año');


if (esBisiesto(anio)) {
    alert(anio + 'es bisiesto')
} else {
    alert(anio + 'no es bisiesto')
}
