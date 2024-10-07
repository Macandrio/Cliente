/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza
un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si
escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“
mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará desde
el primer paréntesis hasta el final.*/

function extraerTexto() {
    // Pedimos al usuario que ingrese una cadena de texto
    let texto = prompt("Introduce una cadena de texto:");

    // buscar contenido entre paréntesis
    let regexParentesis = /\(([^)]+)\)/;
    
    // Buscar coincidencias
    let coincidencia = texto.match(regexParentesis);
    
    if (coincidencia) {
        // Si hay coincidencias, extraer el texto dentro de los paréntesis
        alert(coincidencia[1]);
    } else if (texto.includes("(") && !texto.includes(")")) {
        // Si solo hay paréntesis de apertura, mostrar desde el primer paréntesis hasta el final
        alert(texto.substring(texto.indexOf("(")));
    } else {
        // Si no hay paréntesis, mostrar cadena vacía
        alert("");
    }
}

// Llamamos a la función para ejecutarla
extraerTexto();

