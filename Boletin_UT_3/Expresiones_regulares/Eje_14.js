/*Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45
o 08:12*/

var hora = window.prompt('Ingresa un horario en formato de 24 horas (HH:MM)');

// Expresión regular para validar el formato de hora 24 horas (HH:MM)
var patron = /^([01]\d|2[0-3]):[0-5]\d$/;

if (patron.test(hora)) {
    document.write("El horario ingresado es válido: " + hora);
} else {
    document.write("El horario ingresado no es válido. Debe estar en formato HH:MM con horas entre 00 y 23 y minutos entre 00 y 59.");
}
