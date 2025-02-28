export class Cita {
    constructor(sala, fechaHora) {
        this.sala = sala;
        this.fechaHora = new Date(fechaHora); // Convierte la fecha a objeto Date
    }
}
