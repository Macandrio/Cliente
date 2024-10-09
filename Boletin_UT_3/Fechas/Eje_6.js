/*Realizar un programa que calcule los días de la semana en que caerán los próximos
50 cumpleaños del usuario*/

// Solicitar la fecha de nacimiento al usuario (en formato YYYY-MM-DD)
let fechaNacimientoStr = prompt("Introduce tu fecha de nacimiento (formato YYYY-MM-DD):");

// Convertir la fecha de nacimiento en un objeto Date
let fechaNacimiento = new Date(fechaNacimientoStr);

// Array para convertir el número del día en el nombre del día
let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Obtener el año actual
let anioActual = new Date().getFullYear();

// Recorrer los próximos 50 cumpleaños
for (let i = 0; i < 50; i++) {
    // Calcular el año del próximo cumpleaños
    let anioCumpleanos = anioActual + i;
    
    // Crear un objeto Date para el cumpleaños en ese año
    let proximoCumpleanos = new Date(anioCumpleanos, fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    
    // Obtener el día de la semana (0: Domingo, 1: Lunes, etc.)
    let diaSemanaCumple = proximoCumpleanos.getDay();
    
    // Mostrar el año y el día de la semana en que caerá el cumpleaños
    alert("Tu cumpleaños en el año " + anioCumpleanos + " caerá en " + diasSemana[diaSemanaCumple] + ".");
}
