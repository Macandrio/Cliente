import { Piloto } from './Piloto.js';
import { SesionCalificacion } from './SesionCalificacion.js';

const sesion = new SesionCalificacion();

// Crear pilotos
const piloto1 = new Piloto("Max Verstappen", "Red Bull");
const piloto2 = new Piloto("Lewis Hamilton", "Mercedes");
const piloto3 = new Piloto("Charles Leclerc", "Ferrari");

// Agregar sesiones
sesion.agregarSesion(piloto1, 85000);
sesion.agregarSesion(piloto2, 86000);
sesion.agregarSesion(piloto3, 87000);

// Intentar actualizar un tiempo (si es mejor)
sesion.agregarSesion(piloto2, 84500);

// Mostrar sesiones antes de ordenar
console.log("Sesiones de calificación:");
console.log(sesion.mostrarSesiones());

// Ordenar por tiempo
sesion.ordenarPorTiempo();
console.log("\n Ordenado por tiempo:");
console.log(sesion.mostrarSesiones());

// Ordenar por nombre de piloto
sesion.ordenarPorNombre();
console.log("\n Ordenado por nombre:");
console.log(sesion.mostrarSesiones());

// Eliminar un piloto
console.log("\n Eliminando a Charles Leclerc...");
console.log(sesion.eliminarSesion("Charles Leclerc"));
console.log(sesion.mostrarSesiones());
