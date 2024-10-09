/*Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños
del usuario y muestre “¡Felicidades!” si es el día señalado.*/

// Solicitar la fecha de nacimiento al usuario (en formato YYYY-MM-DD)
let fechaNacimientoStr = prompt("Introduce tu fecha de nacimiento (formato YYYY-MM-DD):");

// Convertir la fecha de nacimiento en un objeto Date
let fechaNacimiento = new Date(fechaNacimientoStr);

// Obtener la fecha actual
let fechaActual = new Date();

// Crear una fecha para el próximo cumpleaños (en el mismo año que el actual)
let proximoCumpleanos = new Date(fechaActual.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate());

// Si el cumpleaños de este año ya pasó, se ajusta al próximo año
if (proximoCumpleanos < fechaActual) {
    proximoCumpleanos.setFullYear(fechaActual.getFullYear() + 1);
}

// Calcular la diferencia en milisegundos entre el próximo cumpleaños y hoy
let diferenciaMilisegundos = proximoCumpleanos - fechaActual;

// Convertir la diferencia en días
let diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

// Mostrar "¡Felicidades!" si hoy es el cumpleaños
if (diferenciaDias === 0) {
    alert("¡Felicidades! Hoy es tu cumpleaños 🎉");
} else {
    // Mostrar cuántos días faltan para el próximo cumpleaños
    alert("Faltan " + diferenciaDias + " días para tu próximo cumpleaños.");
}
