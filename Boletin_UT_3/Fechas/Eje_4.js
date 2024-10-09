/*Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos
entre ambas*/

// Crear una lista vacía para almacenar las fechas
let fechasEnDate = [];
let numeroFechas = parseInt(prompt("¿Cuántas fechas quieres ingresar?"));

// Pedir al usuario que introduzca cada fecha
for (let i = 0; i < numeroFechas; i++) {
    let fechaStr = prompt(`Introduce la fecha ${i + 1} (formato YYYY-MM-DDTHH:MM:SS):`);
    fechasEnDate.push(new Date(fechaStr));
}

// Encontrar la fecha menor y mayor
let fechaMenor = new Date(Math.min(...fechasEnDate));
let fechaMayor = new Date(Math.max(...fechasEnDate));

// Calcular la diferencia en segundos
let diferenciaEnMilisegundos = fechaMayor - fechaMenor;
let diferenciaEnSegundos = diferenciaEnMilisegundos / 1000;

// Mostrar los resultados con alert y concatenando los valores
alert("Fecha menor: " + fechaMenor +
      "\nFecha mayor: " + fechaMayor +
      "\nDiferencia en segundos: " + diferenciaEnSegundos);
