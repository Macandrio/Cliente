/*Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de
ellas empiezan por A. Suponemos que una palabra está separada de otra por uno o
más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y
aparte y las palabras son todas correctas*/

var texto = window.prompt('Ingresa un texto que termine con un punto').trim();

// Expresión regular para encontrar palabras (separadas por espacios/tabuladores y terminando con un punto)
const palabras = texto.match(/\b\w+\b/g) || [];  // \b indica límite de palabra

// Contar palabras que empiezan con 'A' o 'a'
const palabrasConA = (texto.match(/\bA\w*/gi) || []).length;  // \bA indica que comienza con 'A', \w* captura el resto de la palabra

document.write("El texto tiene " + palabras.length + " palabras y " + palabrasConA + " que comienzan con 'A'");

"Ana aprende a programar en JavaScript. Ayer habló con Andrés sobre algoritmos avanzados. Este texto termina con un punto."
