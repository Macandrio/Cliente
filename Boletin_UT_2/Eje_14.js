/*Estamos interesados en calcular los ingresos medios de un conjunto de hombres y
mujeres. Para ello disponemos de un documento donde se recoge si se trata de un
hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos
termina cuando se lee un * como sexo. Se validarán todas las entradas, el sexo será
H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el
trabajador sea hombre o mujer*/


let totalHombres = 0;
let totalMujeres = 0;
let sumaHombres = 0;
let sumaMujeres = 0;

let continuar = true;

while (continuar) {
    let sexo = prompt("Introduce el sexo del trabajador (H para hombre, M para mujer) o * para terminar:");

    if (sexo === "*") {
        continuar = false;
        continue;
    }

    if (sexo !== "H" && sexo !== "M") {
        alert("Sexo inválido. Debe ser H o M.");
        continue;
    }

    let sueldo = parseFloat(prompt("Introduce el sueldo del trabajador (entre 1000 y 2000 euros):"));

    if (isNaN(sueldo) || sueldo < 1000 || sueldo > 2000) {
        alert("Sueldo inválido. Debe estar entre 1000 y 2000 euros.");
        continue;
    }

    if (sexo === "H") {
        totalHombres++;
        sumaHombres += sueldo;
    } else if (sexo === "M") {
        totalMujeres++;
        sumaMujeres += sueldo;
    }
}

let ingresoMedioHombres = totalHombres > 0 ? (sumaHombres / totalHombres).toFixed(2) : 0;
let ingresoMedioMujeres = totalMujeres > 0 ? (sumaMujeres / totalMujeres).toFixed(2) : 0;

alert("Ingresos medios de hombres: " + ingresoMedioHombres + " euros.");
alert("Ingresos medios de mujeres: " + ingresoMedioMujeres + " euros.");
