/*Hacer un algoritmo que lea el número correspondiente a un mes del calendario y
presente en pantalla su nombre usando una estructura de control adecuada.*/

let mes = parseInt(prompt("Introduce un número del 1 al 12 para obtener el mes correspondiente:"));

let nombreMes;

switch (mes) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    case 5:
        nombreMes = "Mayo";
        break;
    case 6:
        nombreMes = "Junio";
        break;
    case 7:
        nombreMes = "Julio";
        break;
    case 8:
        nombreMes = "Agosto";
        break;
    case 9:
        nombreMes = "Septiembre";
        break;
    case 10:
        nombreMes = "Octubre";
        break;
    case 11:
        nombreMes = "Noviembre";
        break;
    case 12:
        nombreMes = "Diciembre";
        break;
    default:
        alert("Número inválido. Por favor, introduce un número entre 1 y 12.");
        break;
}

if (nombreMes) {
    alert("El mes correspondiente es: " + nombreMes);
}
