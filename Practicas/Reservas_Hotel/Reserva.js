export class Reserva {

    constructor(codigo_reserva, nombre, fecha_entrada , fecha_salida, numero_habitacion){
        this.codigo_reserva = this.verificaCodigo(codigo_reserva);
        this.nombre = nombre;
        this.fecha_entrada = new Date(fecha_entrada);
        this.fecha_salida = new Date(fecha_salida);
        this.numero_habitacion = numero_habitacion;
    }


    verificaCodigo (codigo_reserva){
        const regex =/^[A-Z]{3}-\d{5}$/
;

        if (regex.test(codigo_reserva)){
            return codigo_reserva;
        }else{
            console.log('Este codigo no es valido')
        }
    }

    toString() {
        console.log(`📅 Reserva de ${this.nombre}\n🏨 Habitación: ${this.numero_habitacion}\n🕒 Entrada: ${this.fecha_entrada.toDateString()} - Salida: ${this.fecha_salida.toDateString()}\n🔑 Código de Reserva: ${this.codigo_reserva}`);
    }

    
}