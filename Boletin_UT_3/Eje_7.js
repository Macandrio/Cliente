/*Diseñar un script que lea una dirección de email y la valide. No se terminará hasta
introducir una dirección correcta. Modificar el ejercicio anterior para una vez validado
el correo mostrar el usuario y el servidor de correo en dos mensajes*/

function validarEmail(email) {
    // Expresión regular para un correo electrónico
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

function extraerUsuarioYServidor(email) {
    // Dividimos el correo en partes: usuario y servidor
    let partes = email.split('@');
    let usuario = partes[0]; // Parte antes del @
    let servidor = partes[1]; // Parte después del @
    return { usuario, servidor };
}

function leerYValidarEmail() {
    let email;
    
    // Bucle para pedir el correo electrónico hasta que sea válido
    do {
        email = prompt("Introduce tu dirección de correo electrónico:");
    } while (!validarEmail(email)); // Repite hasta que el correo sea válido

    // Extraemos usuario y servidor del correo válido
    let { usuario, servidor } = extraerUsuarioYServidor(email);
    
    // Mostramos el usuario y el servidor en dos mensajes separados
    alert("Usuario: " + usuario);
    alert("Servidor: " + servidor);
}

// Llamamos a la función para ejecutarla
leerYValidarEmail();


/*
^ : La expresión comienza desde el inicio de la cadena.
[a-zA-Z0-9._%+-]+: Captura la parte local del correo (antes del @), que permite letras, números y ciertos caracteres especiales.
@: Busca el símbolo @ que separa la parte local del dominio.
[a-zA-Z0-9.-]+: Captura el nombre del dominio, que permite letras, números, puntos y guiones.
\.: Busca un punto literal antes de la extensión del dominio.
[a-zA-Z]{2,}: Captura la extensión del dominio, asegurando que tenga al menos dos letras.
$: Asegura que la cadena termine inmediatamente después del correo.
*/
