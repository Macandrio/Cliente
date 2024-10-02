/*Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y
presente en pantalla dicho tiempo pero expresado en horas, minutos y segundos.*/

function convertirSegundos() {

    let tiempoEnSegundos = parseInt(prompt("Introduce el tiempo en segundos:"));

    if (isNaN(tiempoEnSegundos) || tiempoEnSegundos < 0) {
        alert("Por favor, introduce un número entero no negativo.");
        return;
    }

    let horas = Math.floor(tiempoEnSegundos / 3600);
    let minutos = Math.floor((tiempoEnSegundos % 3600) / 60);
    let segundos = tiempoEnSegundos % 60;

    alert(`El tiempo es: ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
}

convertirSegundos();
