function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours().toString().padStart(2, '0'); //Asegura que los números se muestren con al menos dos dígitos (ejemplo: "09" en lugar de "9").
    var minutos = ahora.getMinutes().toString().padStart(2, '0');

    document.title = "Hora actual: " + horas + ":" + minutos;
}

// Actualiza el título cada minuto (60000 ms)
actualizarReloj(); // Llamada inicial para mostrar la hora de inmediato
setInterval(actualizarReloj, 60000); //actualizar la hora en el título