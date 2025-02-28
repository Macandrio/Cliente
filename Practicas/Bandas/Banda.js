export class Banda {
    constructor(nombre, anioFormacion, telefonoContacto, estilo) {
        this.nombre = nombre;
        this.anioFormacion = anioFormacion;
        this.telefonoContacto = telefonoContacto;
        this.estilo = estilo;
        this.integrantes = []; // Lista de integrantes (DNI, nombre, apellido)
    }

    // Agregar integrante a la banda (sin duplicados de DNI)
    agregarIntegrante(dni, nombre, apellido) {
        if (this.integrantes.some(integrante => integrante.dni === dni)) {
            console.log('El integrante con Dni ' + dni + ' ya esta en la banda');
        }
        this.integrantes.push({ dni, nombre, apellido });
        console.log('Intigante ' + nombre + ' ' + apellido + ' ingresado');
    }

    // Mostrar información de la banda
    mostrarBanda() {
        return 'Banda:' + this.nombre + '| Año: ' + this.anioFormacion + '| Estilo: ' + this.estilo + '| Contacto: ' + this.telefonoContacto;
    }

    // Mostrar integrantes de la banda
    mostrarIntegrantes() {
        if (this.integrantes.length === 0) {
            return "🔹 No hay integrantes.";
        }
        
        return this.integrantes.map(i => 
           '| Integrante: ' + i.nombre + " " + i.apellido + " (DNI: " + i.dni + ")"
        ).join("\n");
    }
    
}
