/*Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor
que la actual.*/

var fecha = new Date(prompt('Escribe una fecha'));

var fecha_actual = new Date();

if(fecha < fecha_actual){
    alert('La fecha introducida es menor a la fecha actual')
}else{
    alert('La fecha introducida es mayor a la fecha actual')
}