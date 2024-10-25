/*En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos
matriculados (módulo, duración, numAlumnos). Utiliza la estructura que sea más
conveniente.
a. Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así
devuelve el número de alumnos matriculados en dicho módulo.
b. Calcula el número total de alumnos matriculados en todos los módulos*/


// Creación de un Map para almacenar módulos
const alumnos = new Map();

// Agregar cada módulo al Map con el nombre del módulo como clave
alumnos.set("DWS", { modulo: "Desarrollo web Entorno Servidor", duracion: 20, numAlumnos: 5 });
alumnos.set("IN", { modulo: "Interfaces", duracion: 21, numAlumnos: 4 });
alumnos.set("DWC", { modulo: "Desarrollo web Entorno Cliente", duracion: 23, numAlumnos: 3 });

// a. Comprobar si existe el módulo "DWS" y devolver el número de alumnos matriculados
if (alumnos.has("DWS")) {
  document.write("Alumnos matriculados en DWS: " + alumnos.get("DWS").numAlumnos + "<br>");
} else {
  document.write("El módulo 'DWS' no existe en la estructura.<br>");
}

// b. Calcular el número total de alumnos matriculados en todos los módulos
let totalAlumnos = 0;
alumnos.forEach(modulo => {
  totalAlumnos += modulo.numAlumnos;
});


document.write("Número total de alumnos matriculados en todos los módulos: " + totalAlumnos);




