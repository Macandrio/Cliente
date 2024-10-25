/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la
siguiente manera: ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la
información con posterioridad a la creación de la estructura.

a. Muestra cuántos módulos hay almacenados
b. Muestra el contenido de la estructura
c. Devuelve las abreviaturas de todos los módulos guardados
d. Devuelve el nombre completo de todos los módulos
e. Consulta si está el módulo "DAW"
f. Si está, elimínalo.
g. Ordena alfabéticamente el map según las abreviaturas de los módulos*/

// 1. Crear un Map vacío para almacenar los módulos del IES
const modulosIES = new Map();

// 2. Añadir información sobre módulos
modulosIES.set("DWECL", "Desarrollo Web en Entorno Cliente");
modulosIES.set("DWES", "Desarrollo Web en Entorno Servidor");
modulosIES.set("DAW", "Desarrollo de Aplicaciones Web");
modulosIES.set("DI", "Despliegue de Aplicaciones");
modulosIES.set("EIE", "Empresa e Iniciativa Emprendedora");

// a. Mostrar cuántos módulos hay almacenados
let resultado = "Número de módulos: " + modulosIES.size + "<br><br>";

// b. Mostrar el contenido de la estructura
resultado += "Contenido del Map:<br>";
modulosIES.forEach((nombre, abreviatura) => {
  resultado += "Abreviatura: " + abreviatura + ", Nombre: " + nombre + "<br>";
});
resultado += "<br>";

// c. Devolver las abreviaturas de todos los módulos guardados
const abreviaturas = Array.from(modulosIES.keys());
resultado += "Abreviaturas de los módulos: " + abreviaturas.join(", ") + "<br><br>";

// d. Devolver el nombre completo de todos los módulos
const nombresCompletos = Array.from(modulosIES.values());
resultado += "Nombres completos de los módulos: " + nombresCompletos.join(", ") + "<br><br>";

// e. Consultar si está el módulo "DAW"
const contieneDAW = modulosIES.has("DAW");
resultado += "¿Está el módulo 'DAW'?: " + (contieneDAW ? "Sí" : "No") + "<br><br>";

// f. Si está el módulo "DAW", eliminarlo
if (contieneDAW) {
  modulosIES.delete("DAW");
  resultado += "Módulo 'DAW' eliminado.<br><br>";
}

// g. Ordenar alfabéticamente el Map según las abreviaturas de los módulos
const modulosOrdenados = new Map([...modulosIES.entries()].sort());
resultado += "Contenido del Map ordenado alfabéticamente por abreviatura:<br>";
modulosOrdenados.forEach((nombre, abreviatura) => {
  resultado += "Abreviatura: " + abreviatura + ", Nombre: " + nombre + "<br>";
});

// Escribir todo el resultado concatenado en el documento
document.write(resultado);
