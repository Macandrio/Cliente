/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día,
mes y año y calcule cuál de ellas es anterior a la otra*/

// Leer la primera fecha en formato DD-MM-YYYY
    let fecha1 = prompt("Introduce la primera fecha en formato DD-MM-YYYY:");
    let fecha2 = prompt("Introduce la segunda fecha en formato DD-MM-YYYY:");

    // Función para convertir la fecha de DD-MM-YYYY a un objeto Date
    function convertirADate(fecha) {
        let partes = fecha.split("-");
        return new Date(partes[2], partes[1], partes[0]); // YYYY, MM (0-11), DD
    }

    // Convertir las fechas a objetos Date
    let fechaObj1 = convertirADate(fecha1);
    let fechaObj2 = convertirADate(fecha2);

    // Comparar las fechas
    if (fechaObj1 < fechaObj2) {
        alert("La fecha " + fecha1 + " es anterior a " + fecha2);
    } else if (fechaObj1 > fechaObj2) {
        alert("La fecha " + fecha2 + " es anterior a " + fecha1);
    } else {
        alert("Ambas fechas son iguales.");
    }
