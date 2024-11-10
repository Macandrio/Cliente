// Solicita el nombre de usuario con exactamente 7 caracteres
let nombreUsuario = prompt("Introduce tu nombre de usuario (exactamente 7 caracteres):");
while (nombreUsuario.length !== 7) {
    nombreUsuario = prompt("Error: El nombre de usuario debe contener exactamente 7 caracteres. Por favor, intenta de nuevo:");
}

// Contar el número de dígitos en el nombre de usuario
const numDigitos = (nombreUsuario.match(/\d/g) || []).length;

// Mostrar un pop-up cada 5 segundos tantas veces como dígitos tenga el nombre
let contador = 0;

function mostrarPopup() {
    if (contador < numDigitos) {
        let nuevaVentana = window.open("", "Nueva Ventana", "width=600,height=400,right= 700, top = 700");
        nuevaVentana.document.write("Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!<br>");
        contador++;
    } else {
        clearInterval(intervalo); // Detener el intervalo después de mostrar todos los pop-ups
    }
}

const intervalo = setInterval(mostrarPopup, 1000);