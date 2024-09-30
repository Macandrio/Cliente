/*Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso.
Considere el caso especial del valor 0 mostrando el mensaje de error
correspondiente.*/ 

var num = window.prompt('Ingresa un número');

if(num == 0){
    
    alert('El número 0 no tiene valor inverso');
}else if(num > 0){
    var inverso = num;
    for (var i = 0; i < (num*2); i++) {
        inverso -= 1
    }
      
}else{
    var inverso = num;
    for (var i = 0; i < ; i++) {
        inverso -= 1
    }
}

