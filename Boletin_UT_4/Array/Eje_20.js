/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una
persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?*/

// Array bidimensional para almacenar los datos de usuarios
let usuarios = [];

// Función para agregar un usuario
function agregarUsuario(nombre, apellidos, dni, fechaNacimiento) {
    usuarios.push([nombre, apellidos, dni, fechaNacimiento]);
}

// Función para imprimir todos los usuarios
function imprimirUsuarios() {
    usuarios.forEach(usuario => {
        console.log(`Nombre: ${usuario[0]}, Apellidos: ${usuario[1]}, DNI: ${usuario[2]}, Fecha de Nacimiento: ${usuario[3]}`);
    });
}

// Función para buscar un usuario por apellidos
function buscarPorApellidos(apellidos) {
    return usuarios.filter(usuario => usuario[1] === apellidos);
}

// Función para buscar un usuario por DNI
function buscarPorDNI(dni) {
    return usuarios.find(usuario => usuario[2] === dni);
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// Función para buscar usuarios por edad mínima
function buscarPorEdad(minimaEdad) {
    return usuarios.filter(usuario => calcularEdad(usuario[3]) >= minimaEdad);
}

// Ejemplo de uso
agregarUsuario("Juan", "Perez", "12345678A", "1990-04-23");
agregarUsuario("Ana", "Lopez", "87654321B", "2005-06-15");
imprimirUsuarios();
console.log(buscarPorApellidos("Perez"));
console.log(buscarPorDNI("87654321B"));
console.log(buscarPorEdad(18));
