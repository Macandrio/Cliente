/*Realizar un programa que calcule el número de cifras de un número. Deberá
implementarse una función numCifras(numero) que devuelva el número de cifras del
mismo. Utiliza el operador spread.*/

/*---------Funcion--------*/
function numCifras(...cifra_numero){

    var cifra = cifra_numero.length + 1;
    return cifra;
}


/*var numero= window.prompt("Introduce un numero");*/
var numero = 534;

numCifras(numero);





