/*Diseña un algoritmo para simular el juego de ¿dónde está la bolita? (trileros), famoso
timo practicado por los llamados trileros .En nuestro caso el ordenador será un
honrado trilero que no engañará al usuario que juegue con él.*/


function jugarDondeEstaLaBolita() {
    let jugarDeNuevo = true;

    while (jugarDeNuevo) {

        alert("Bienvenido al juego '¿Dónde está la bolita?'\n" +
              "Hay tres posiciones: 1, 2 y 3.\n" +
              "Una bolita está escondida en una de ellas. ¡Adivina dónde está!");

        let posicionBolita = Math.floor(Math.random() * 3) + 1;

        let eleccionUsuario = parseInt(prompt("Elige una posición (1, 2 o 3):"));

        while (isNaN(eleccionUsuario) || eleccionUsuario < 1 || eleccionUsuario > 3) {
            alert("Por favor, elige un número válido entre 1 y 3.");
            eleccionUsuario = parseInt(prompt("Elige una posición (1, 2 o 3):"));
        }

        if (eleccionUsuario === posicionBolita) {
            alert("¡Felicidades! Has acertado, la bolita estaba en la posición " + posicionBolita + ".");
        } else {
            alert("Lo siento, la bolita estaba en la posición " + posicionBolita + ".");
        }

        jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
    }

    alert("Gracias por jugar. ¡Hasta la próxima!");
}

jugarDondeEstaLaBolita();
