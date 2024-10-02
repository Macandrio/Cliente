/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día,
mes y año y calcule cuál de ellas es anterior a la otra.*/


function esFechaValida(dia, mes, anio) {

    if (anio < 0) return false;

    const diasPorMes = [31, (esAnoBisiesto(anio) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (mes < 1 || mes > 12) return false;

    return dia >= 1 && dia <= diasPorMes[mes - 1];
}

function esAnoBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function compararFechas() {
    let dia1 = parseInt(prompt("Introduce el día de la primera fecha:"));
    let mes1 = parseInt(prompt("Introduce el mes de la primera fecha:"));
    let anio1 = parseInt(prompt("Introduce el año de la primera fecha:"));

    if (!esFechaValida(dia1, mes1, anio1)) {
        alert("La primera fecha es inválida. Asegúrate de que el día, mes y año son correctos.");
        return;
    }

    let dia2 = parseInt(prompt("Introduce el día de la segunda fecha:"));
    let mes2 = parseInt(prompt("Introduce el mes de la segunda fecha:"));
    let anio2 = parseInt(prompt("Introduce el año de la segunda fecha:"));

    if (!esFechaValida(dia2, mes2, anio2)) {
        alert("La segunda fecha es inválida. Asegúrate de que el día, mes y año son correctos.");
        return;
    }

    let fecha1 = new Date(anio1, mes1 - 1, dia1);
    let fecha2 = new Date(anio2, mes2 - 1, dia2);

    if (fecha1 < fecha2) {
        alert("La primera fecha es anterior a la segunda fecha.");
    } else if (fecha1 > fecha2) {
        alert("La segunda fecha es anterior a la primera fecha.");
    } else {
        alert("Ambas fechas son iguales.");
    }
}

compararFechas();
