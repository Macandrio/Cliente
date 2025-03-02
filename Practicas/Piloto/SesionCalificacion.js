import { Piloto } from './Piloto.js';

export class SesionCalificacion {
    constructor() {
        this.sesiones = []; // Array que almacena las sesiones de calificación
    }

    // Agregar una sesión o actualizar si el tiempo es mejor
    agregarSesion(piloto, tiempo) {
        const sesionExistente = this.sesiones.find(s => s.piloto.nombre === piloto.nombre);

        if (sesionExistente) {
            if (tiempo < sesionExistente.tiempo) {
                sesionExistente.tiempo = tiempo; // Actualiza solo si el tiempo es mejor
            }
        } else {
            this.sesiones.push({ piloto, tiempo });
        }
    }

    // Eliminar una sesión si existe
    eliminarSesion(nombrePiloto) {
        const index = this.sesiones.findIndex(s => s.piloto.nombre === nombrePiloto);

        if (index !== -1) {
            this.sesiones.splice(index, 1);
            return `${nombrePiloto} eliminado de la sesión.`;
        } else {
            return `No se encontró a ${nombrePiloto} en la sesión.`;
        }
    }

    // Ordenar por tiempos (menor a mayor)
    ordenarPorTiempo() {
        this.sesiones.sort((a, b) => a.tiempo - b.tiempo);
    }

    // Ordenar por nombre de piloto (A-Z)
    ordenarPorNombre() {
        this.sesiones.sort((a, b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
    }

    // Mostrar sesiones de calificación
    mostrarSesiones() {
        return this.sesiones.map(s => `${s.piloto.nombre} (${s.piloto.escuderia}) - ${s.tiempo}ms`).join("\n");
    }
}
