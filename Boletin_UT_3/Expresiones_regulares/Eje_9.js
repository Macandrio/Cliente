/*Realiza un supertrim de una cadena, eliminando todos los espacios duplicados*/


var texto = window.prompt('Ingresa un texto con espacios duplicados');
var textoSuperTrim = texto.replace(/\s+/g, ' ').trim();  // Reemplaza múltiples espacios con uno y elimina los espacios al inicio/final
document.write("Texto procesado: " + textoSuperTrim);
