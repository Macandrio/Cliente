import { Cita } from './Citas.js'; // ✅ Importamos la clase Cita

export class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citasPendientes = [];
        this.historialCitas = [];
    }

    agregarCita(sala, fechaHora) {
        var nuevaCita = new Cita(sala, fechaHora);
        var hoy = new Date();
        var agregarcita = true;

        if (nuevaCita.fechaHora < hoy) {
            console.log("No puedes agendar una cita en el pasado.");
            agregarcita = false;
        }

        var mismoDia = this.citasPendientes.some(cita => 
            cita.fechaHora.toDateString() === nuevaCita.fechaHora.toDateString()
        );

        if (mismoDia) {
            console.log("Ya tienes una cita programada para ese día.");
            agregarcita = false;
        }

        if(agregarcita){
            this.citasPendientes.push(nuevaCita);
            console.log("Cita agregada correctamente.");
        }
       
    }

    actualizarCitas() {
        var ahora = new Date(); // Obtiene la fecha y hora actual
        this.citasPendientes = this.citasPendientes.filter(cita => {
            if (cita.fechaHora < ahora) { // Verifica si la cita ya pasó
                this.historialCitas.push(cita); // Mueve la cita al historial
                return false; // Elimina la cita de la lista de citas pendientes
            }
            return true; // Mantiene las citas futuras en la lista de citas pendientes
        });
    }
    

    programarRecordatorios() {
        let intentos = 0; // Contador de intentos de recordatorio (máximo 3)
    
        setInterval(() => { // Ejecuta la función cada 60 segundos (1 minuto)
            this.actualizarCitas(); // Actualiza las citas (mueve al historial las citas pasadas)
            
            var ahora = new Date(); // Obtiene la fecha y hora actuales
    
            this.citasPendientes.forEach(cita => { // Recorre todas las citas pendientes
                if (cita.fechaHora - ahora <= 5 * 60 * 1000 && cita.fechaHora > ahora) { 
                    // Verifica si la cita es en los próximos 5 minutos y aún no ha ocurrido
                    
                    if (intentos < 3) { // Solo muestra el recordatorio hasta 3 veces
                        alert(`¡Recordatorio! Tienes una cita en la sala ${cita.sala} a las ${cita.fechaHora}`);
                        intentos++; // Aumenta el contador de intentos
                    }
                }
            });
    
        }, 60000); // Se ejecuta cada 60 segundos (1 minuto)
    }
    
}
