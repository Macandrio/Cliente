/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si
tecleo “hola que tal” deberá mostrar “lat euq aloh”*/

/*

var cadena = window.prompt('Ingresa una texto');

//El punto significa que coja todos los caracteres que haya por ejemplo hola coje h , o , l , a
let patron = /(.)/g;

//.match() convierte una cadena en una lista ["h","o","l","a"]
//.reverse() lo devuelve al reves ["a","l","o","h"]
//.join coje la lista y la tranforma en cadena
let resultado = cadena.match(patron).reverse().join('');

alert(resultado);  // Salida: aloh

*/



var cadena = window.prompt('Ingresa una texto');
var reverso= "";
for (let i = cadena.length - 1 ; i >= 0; i--){
    reverso += cadena.charAt(i)
}

alert(reverso);

