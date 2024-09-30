/*Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de
ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o
más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y
aparte y las palabras son todas correctas*/

var cadena = window.prompt('Ingresa una texto').toLocaleUpperCase();

// Eliminar el punto final para contar solo las palabras
texto = texto.slice(0, -1);


var arraycadena = cadena.split(/\s+/);
contadora = 0;


for (var i = 0; i < arraycadena.length; i++) {
    
    if(arraycadena[i].charAt(0) === "A"){
        contadora ++;
    }
}

alert("Total de palabras: " + arraycadena.length + "Palabras que empiezan con 'A': " + contadora);