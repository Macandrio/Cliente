//Calcular el área1 y el volumen de la esfera cuyo radio se pide al usuario2.

var radio = window.prompt('Ingresa el radio');

var area = 2 * Math.PI * (radio * radio);
var volumen = 4/3 * 3.14 * (radio * radio * radio);

alert('El area es = ' + parseInt(area) + ' y el Volumen es = ' + parseInt(volumen));