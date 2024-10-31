/*Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas
anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):*/

// Función para filtrar e imprimir usuarios mayores de edad
function mayorEdad() {
    const mayores = usuarios.filter(usuario => calcularEdad(usuario[3]) >= 18);
    mayores.forEach(usuario => {
        document.write(`Nombre: ${usuario[0]}, Apellidos: ${usuario[1]}, DNI: ${usuario[2]}, Fecha de Nacimiento: ${usuario[3]}`);
    });
}

// Función para calcular el tiempo faltante para la mayoría de edad y mostrar menores
function menorEdad() {
    const menores = usuarios.filter(usuario => calcularEdad(usuario[3]) < 18);
    menores.forEach(usuario => {
        const edad = calcularEdad(usuario[3]);
        const añosFaltantes = 18 - edad;
        document.write(`Nombre: ${usuario[0]}, Apellidos: ${usuario[1]}, Edad: ${edad}, Faltan ${añosFaltantes} años para la mayoría de edad`);
    });
}

// Función para modificar los datos de un usuario por DNI
function modificaDatos(dni, nuevoDato, tipoDato) {
    const usuario = buscarPorDNI(dni);
    if (!usuario) return "Usuario no encontrado";
    switch (tipoDato.toLowerCase()) {
        case "nombre":
            usuario[0] = nuevoDato;
            break;
        case "apellidos":
            usuario[1] = nuevoDato;
            break;
        case "fecha de nacimiento":
            usuario[3] = nuevoDato;
            break;
        default:
            return "Tipo de dato no válido";
    }
    document.write("Datos modificados correctamente");
}

// Función para eliminar un usuario por DNI con confirmación
function eliminaUsuario(dni) {
    const index = usuarios.findIndex(usuario => usuario[2] === dni);
    if (index !== -1) {
        const confirmacion = confirm(`¿Seguro que quieres eliminar al usuario con DNI ${dni}?`);
        if (confirmacion) {
            usuarios.splice(index, 1);
            document.write("Usuario eliminado");
        } else {
            document.write("Eliminación cancelada");
        }
    } else {
        document.write("Usuario no encontrado");
    }
}

// Ejemplo de uso
mayorEdad();
menorEdad();
modificaDatos("12345678A", "Juan Carlos", "nombre");
eliminaUsuario("87654321B");
