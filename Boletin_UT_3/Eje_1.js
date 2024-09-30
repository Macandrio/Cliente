/*Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO".
Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la
ñ.*/

var nombresleidos = 0;
var contadorc = 0;
var contadorn = 0;

var nombres = window.prompt('Ingresa una Nombre');

var lista = [];

while(nombres.localeCompare("ultimo")){
    if(nombres.indexOf("c")){
        contadorc += 1;
    }
    
    if(nombres.indexOf("ñ")){
        contadorn += 1;
    }

    lista.push(nombres);
}
if(lista.length == 0){
    alert("No hay nombres")
}else{
    alert("La lista de nombres es: " + lista + " hay " + contadorc + " que empiezan con C y " + contadorn + " con Ñ")
}
