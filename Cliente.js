class Cliente {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.cita_pendiente = [];
        this.historial_cita = [];
    }


    AgregarCita(cita){
        if(cita.fecha.getTime() > Date.now() && this.cita_pendiente.find(c => c.fecha.toDateString() === cita.fecha.toDateString())){
            return this.historial_cita.push(cita);
        }else {
            document.write('La cita no puede ser anterior a la hora actual')
        }
    }
}