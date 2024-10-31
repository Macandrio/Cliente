// Definimos la clase Persona
class Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fechaNacimiento = new Date(fechaNacimiento);
    }

    // Método para calcular la edad de la persona
    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}

// Array para almacenar las personas
const personas = [];

// Función para agregar una nueva persona
function agregarPersona(nombre, apellidos, dni, fechaNacimiento) {
    const persona = new Persona(nombre, apellidos, dni, fechaNacimiento);
    personas.push(persona);
}

// Función para imprimir todos los datos de las personas
function imprimirPersonas() {
    personas.forEach(persona => {
        document.write(`Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento.toLocaleDateString()}<br>`);
    });
}

// Función para buscar una persona por apellidos
function buscarPorApellidos(apellidos) {
    const resultados = personas.filter(persona => persona.apellidos === apellidos);
    resultados.forEach(persona => {
        document.write(`Resultado de Búsqueda - Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento.toLocaleDateString()}<br>`);
    });
}

// Función para buscar una persona por DNI
function buscarPorDNI(dni) {
    const persona = personas.find(persona => persona.dni === dni);
    if (persona) {
        document.write(`Resultado de Búsqueda - Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento.toLocaleDateString()}<br>`);
    } else {
        document.write("No se encontró ninguna persona con ese DNI<br>");
    }
}

// Función para imprimir personas mayores de edad
function mayorEdad() {
    const mayores = personas.filter(persona => persona.calcularEdad() >= 18);
    mayores.forEach(persona => {
        document.write(`Mayor de Edad - Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento.toLocaleDateString()}<br>`);
    });
}

// Función para calcular el tiempo faltante para la mayoría de edad y mostrar menores
function menorEdad() {
    const menores = personas.filter(persona => persona.calcularEdad() < 18);
    menores.forEach(persona => {
        const edad = persona.calcularEdad();
        const añosFaltantes = 18 - edad;
        document.write(`Menor de Edad - Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, Edad: ${edad}, Faltan ${añosFaltantes} años para la mayoría de edad<br>`);
    });
}

// Función para modificar los datos de una persona
function modificaDatos(dni, nuevoDato, tipoDato) {
    const persona = personas.find(persona => persona.dni === dni);
    if (!persona) {
        document.write("Persona no encontrada<br>");
        return;
    }
    switch (tipoDato.toLowerCase()) {
        case "nombre":
            persona.nombre = nuevoDato;
            break;
        case "apellidos":
            persona.apellidos = nuevoDato;
            break;
        case "fecha de nacimiento":
            persona.fechaNacimiento = new Date(nuevoDato);
            break;
        default:
            document.write("Tipo de dato no válido<br>");
            return;
    }
    document.write("Datos modificados correctamente<br>");
}

// Función para eliminar una persona por DNI
function eliminaPersona(dni) {
    const index = personas.findIndex(persona => persona.dni === dni);
    if (index !== -1) {
        personas.splice(index, 1);
        document.write("Persona eliminada<br>");
    } else {
        document.write("Persona no encontrada<br>");
    }
}

// Ejemplo de uso
agregarPersona("Juan", "Perez", "12345678A", "1990-04-23");
agregarPersona("Ana", "Lopez", "87654321B", "2005-06-15");
document.write("<h3>Lista de Personas</h3>");
imprimirPersonas();
document.write("<h3>Búsqueda por Apellidos</h3>");
buscarPorApellidos("Perez");
document.write("<h3>Búsqueda por DNI</h3>");
buscarPorDNI("87654321B");
document.write("<h3>Mayores de Edad</h3>");
mayorEdad();
document.write("<h3>Menores de Edad</h3>");
menorEdad();
document.write("<h3>Modificación de Datos</h3>");
modificaDatos("12345678A", "Juan Carlos", "nombre");
document.write("<h3>Eliminación de Persona</h3>");
eliminaPersona("87654321B");
