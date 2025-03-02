import { Alumno } from "./Alumno.js";
import { Aula } from "./Aula.js";


var alumno1 = new Alumno('Alejandro', '23883999V', 2, 
    {modulo : 'Cliente' , nota : 7},
    {modulo : 'Interfaces' , nota : 7},
    {modulo : 'Servidor' , nota : 7},
    {modulo : 'Despliegue' , nota : 7},
)

var alumno2 = new Alumno('Fran', '99938832B', 2, 
    {modulo : 'Cliente' , nota : 5},
    {modulo : 'Interfaces' , nota : 7},
    {modulo : 'Servidor' , nota : 6},
    {modulo : 'Despliegue' , nota : 5},
)

var alumno3 = new Alumno('Alvaro', '99938832B', 2, 
    {modulo : 'Cliente' , nota : 10},
    {modulo : 'Interfaces' , nota : 9},
    {modulo : 'Servidor' , nota : 10},
    {modulo : 'Despliegue' , nota : 9},
)


console.log('La nota media es: ' + alumno1.notaMedia())
console.log(alumno1.mejorNota());


var aula1 = new Aula(alumno1 , alumno2, alumno3)


console.log(aula1.toString())

console.log(aula1.BuscarAlumno('23883999V'));

console.log(aula1.ordenarNotas('99938832B'));

console.log(aula1.ordenarNombre())

