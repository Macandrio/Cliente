/*Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y
presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos*/

let segundosTotales = parseInt(prompt("Introduce el tiempo en segundos:"));

// Crear una fecha base (1970-01-01) y añadir los segundos introducidos
let fechaBase = new Date(0); // Fecha 1 de enero de 1970
fechaBase.setSeconds(segundosTotales); // Añadir los segundos introducidos

// Obtener las horas, minutos y segundos usando métodos de Date
let horas = Math.floor(segundosTotales / 3600); // Obtenemos las horas por separado
let minutos = fechaBase.getMinutes(); // Obtener los minutos
let segundos = fechaBase.getSeconds(); // Obtener los segundos restantes

// Mostrar el resultado en pantalla
alert("El tiempo es: " + horas + " horas, " + minutos + " minutos, y " + segundos + " segundos.");