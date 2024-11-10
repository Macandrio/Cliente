/*Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO".
Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.*/


var nombres = window.prompt('Ingresa una Nombre').toLocaleUpperCase();
var conc = /^[cC]/ //comienza con c
var conn = /[ñÑ]/ //contienen la ñ
var lista = [];

var contadorconc = 0;
var contadorconn = 0;

while(nombres.localeCompare("ULTIMO") !== 0){
    if(conc.test(nombres)){ 
        contadorconc ++;    
    }
    if(conn.test(nombres)){ 
        contadorconn ++;    
    }

    if(nombres.localeCompare("ULTIMO") !== 0){
        lista.push(nombres)
    }
    var nombres = window.prompt('Ingresa una Nombre').toLocaleUpperCase();
}

document.write('En la lista ' + lista + '<br>Hay ' + contadorconc + ' que enpiezan con C y ' + contadorconn + ' que contienen la Ñ')