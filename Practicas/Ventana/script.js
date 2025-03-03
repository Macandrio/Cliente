function solicitarUsuario() {
    let usuario;
    do {
        usuario = prompt("Introduce tu nombre de usuario (exactamente 7 caracteres):");
    } while (!usuario || usuario.length !== 7);
    return usuario;
}

function contarDigitos(usuario) {
    return usuario.replace(/[^0-9]/g, "").length;
}

function mostrarPopup() {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Hola usuario. Aquí tienes el producto del año. ¡Atrévete a probarlo!";

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 3000);
}

function iniciarPublicidad() {
    let usuario = solicitarUsuario();
    let numDigitos = contarDigitos(usuario);
    console.log('Usuario: ' +usuario + ' - Digito en el nombre: ' + numDigitos);

    let contador = 0;
    let intervalo = setInterval(() => {
        if (contador < numDigitos) {
            mostrarPopup();
            contador++;
        } else {
            clearInterval(intervalo);
        }
    }, 5000);
}

window.onload = iniciarPublicidad;
