/*Escribir un script que mostrará el nombre del navegador , la versión y el sistema
operativo que esté utilizando. Prueba tu programa en distintos navegadores, el
objeto Navigator no está estandarizado*/

// Función para obtener la información del navegador y sistema operativo
function obtenerInfoNavegador() {
    let nombreNavegador, versionNavegador, sistemaOperativo;

    // Detectar nombre del navegador
    if (navigator.userAgent.indexOf("Chrome") !== -1) {
        nombreNavegador = "Google Chrome";
    } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        nombreNavegador = "Mozilla Firefox";
    } else if (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1) {
        nombreNavegador = "Apple Safari";
    } else if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1) {
        nombreNavegador = "Internet Explorer";
    } else if (navigator.userAgent.indexOf("Edge") !== -1) {
        nombreNavegador = "Microsoft Edge";
    } else {
        nombreNavegador = "Navegador desconocido";
    }

    // Detectar versión del navegador
    const versionRegex = new RegExp(nombreNavegador + "/([0-9.]+)");
    const match = navigator.userAgent.match(versionRegex);
    versionNavegador = match ? match[1] : "Versión desconocida";

    // Detectar sistema operativo
    if (navigator.userAgent.indexOf("Win") !== -1) {
        sistemaOperativo = "Windows";
    } else if (navigator.userAgent.indexOf("Mac") !== -1) {
        sistemaOperativo = "MacOS";
    } else if (navigator.userAgent.indexOf("Linux") !== -1) {
        sistemaOperativo = "Linux";
    } else if (navigator.userAgent.indexOf("Android") !== -1) {
        sistemaOperativo = "Android";
    } else if (navigator.userAgent.indexOf("like Mac") !== -1) {
        sistemaOperativo = "iOS";
    } else {
        sistemaOperativo = "Sistema operativo desconocido";
    }

    // Mostrar los resultados
    console.log("Navegador: " + nombreNavegador);
    console.log("Versión: " + versionNavegador);
    console.log("Sistema Operativo: " + sistemaOperativo);
}

// Llamar a la función para obtener la información
obtenerInfoNavegador();
