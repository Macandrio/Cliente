class Banda {
    constructor(nombre, anioFormacion, telefono, estilo) {
        this.nombre = nombre;
        this.anioFormacion = anioFormacion;
        this.integrantes = new Map();
        this.dnisregistrados = new Set();
        this.telefono = telefono;
        this.estilo = estilo;
    }

    añadirintegrante(nombre,apellido,dni){
        if(this.dnisregistrados.has(dni)){
            document.write('Error ese dni ya esta')
        }else{
            return this.integrantes.set(dni, {nombre, apellido});
            this.dnisregistrados.add(dni);
            document.write('El integrante ya esta creado')
            
        }
    }

    MostrarBanda(){
        document.write('La Banda es: ' + this.nombre + ', Año Formacion:' + this.anioFormacion + ', Telefono' + this.telefono + ', Estilo de Musica: ' + this.estilo + '<br>')
    }

    mostrarIntegrantes() {
        this.integrantes.forEach((valor, clave) => {
          document.write('DNI: ' + clave + ', Nombre: ' + valor.nombre + ' ' + valor.apellido + '<br>');
        });
    }
}