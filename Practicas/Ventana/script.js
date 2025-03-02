// Función para pedir el nombre de usuario y validar que tenga exactamente 7 caracteres
function solicitarUsuario() {
    let usuario;
    do {
        usuario = prompt("Introduce tu nombre de usuario (exactamente 7 caracteres):");
    } while (!usuario || usuario.length !== 7); // Si es null, vacío o no tiene 7 caracteres, sigue pidiendo

    return usuario;
}

// Función para contar los dígitos en el nombre de usuario
function contarDigitos(usuario) {
    return usuario.replace(/[^0-9]/g, "").length; // Filtra solo números y cuenta cuántos hay
}

// Función para mostrar un pop-up en la esquina inferior derecha
function mostrarPopup() {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Hola usuario. Aquí tienes el producto del año. ¡Atrévete a probarlo!";

    document.body.appendChild(popup);

    // Elimina el pop-up después de 3 segundos
    setTimeout(() => popup.remove(), 3000);
}

// Función principal
function iniciarPublicidad() {
    let usuario = solicitarUsuario();
    let numDigitos = contarDigitos(usuario);

    console.log(`Usuario: ${usuario} - Dígitos en el nombre: ${numDigitos}`);

    // Muestra el pop-up cada 5 segundos, tantas veces como dígitos tenga el nombre
    let contador = 0;
    let intervalo = setInterval(() => {
        if (contador < numDigitos) {
            mostrarPopup();
            contador++;
        } else {
            clearInterval(intervalo); // Detener el intervalo después de mostrar todos los pop-ups
        }
    }, 5000);
}

// Ejecutar el programa al cargar la página
window.onload = iniciarPublicidad;
