class Cita {
    constructor(sala, fechaHora) {
      this.sala = sala;
      this.fechaHora = new Date(fechaHora); // Convertir a objeto Date
    }
  }
  
  class Cliente {
    constructor(nombre, apellidos, dni) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.dni = dni;
      this.citasPendientes = [];
      this.historialCitas = [];
    }
  
    agregarCita(sala, fechaHora) {
      const nuevaCita = new Cita(sala, fechaHora);
      const ahora = new Date();
  
      // Verificar que la cita no sea anterior a la fecha actual
      if (nuevaCita.fechaHora < ahora) {
        document.write("La cita no puede ser anterior a la fecha actual.<br>");
        return;
      }
  
      // Verificar que no haya otra cita el mismo día
      const mismaFecha = this.citasPendientes.find(cita => 
        cita.fechaHora.toDateString() === nuevaCita.fechaHora.toDateString()
      );
      if (mismaFecha) {
        document.write("Ya tienes una cita programada para el mismo día.<br>");
        return;
      }
  
      // Agregar la cita
      this.citasPendientes.push(nuevaCita);
      document.write("Cita agregada para el cliente " + this.nombre + " " + this.apellidos + " en la sala " + sala + " el " + nuevaCita.fechaHora + ".<br>");
    }
  
    programarRecordatorios() {
      setInterval(() => {const ahora = new Date();
this.citasPendientes = this.citasPendientes.filter(cita => {
          if (cita.fechaHora <= ahora) {
            this.historialCitas.push(cita);
            this.mostrarRecordatorio(cita);
            return false; // Quita la cita de las pendientes
          }
          return true;
        });
      }, 60000); // Comprobar cada minuto
    }
  
    mostrarRecordatorio(cita) {
      let contador = 0;
      function mostrarVentana() {
        if (contador < 3) {
          let nuevaVentana = window.open("", "Recordatorio", "width=400,height=200");
          nuevaVentana.document.write("<p>Recordatorio de cita en la sala " + cita.sala + " el " + cita.fechaHora + "</p>");
          contador++;
          nuevaVentana.onbeforeunload = () => {
            setTimeout(mostrarVentana, 5000); // Reaparece después de 5 segundos
          };
        }
      }
      mostrarVentana();
    }
  }
  
  // Ejemplo de uso
  const cliente1 = new Cliente("Juan", "Pérez", "12345678A");
  cliente1.agregarCita("Sala 1", "2024-12-15T10:30:00");
  cliente1.agregarCita("Sala 2", "2024-12-15T15:00:00"); // Esto debería ser rechazado por tener otra cita el mismo día
  cliente1.agregarCita("Sala 3", "2023-11-01T10:00:00"); // Esto debería ser rechazado por ser una fecha anterior
  
  // Programar recordatorios para las citas
  cliente1.programarRecordatorios();
  