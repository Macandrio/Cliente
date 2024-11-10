class Banda {
    constructor(nombre, anioFormacion, telefono, estilo) {
      this.nombre = nombre;
      this.anioFormacion = anioFormacion;
      this.integrantes = new Map();
      this.dnisRegistrados = new Set(); // Usamos un Set para mantener los DNI únicos
      this.telefono = telefono;
      this.estilo = estilo;
    }

    añadirIntegrante(nombre, apellido, dni){
        if (this.dnisRegistrados.has(dni)){
            document.write('Error el DNI' + dni + ' ya esta registrado<br>')
            return;
        }else{
            this.integrantes.set(dni, {nombre, apellido} )
            this.dnisRegistrados.add(dni);
            document.write('El integrante: ' + nombre + ' ha sido registrado<br>')
        }
    }

    mostrarBanda
    (){
        document.write('La Banda es: ' + this.nombre + ', Año Formacion:'+ this.anioFormacion + ', Telefono' + this.telefono + ', Estilo de Musica: ' + this.estilo + '<br>')
    }

    mostrarIntegrantes() {
        // Iteramos sobre el Map para mostrar cada integrante
        this.integrantes.forEach((valor, clave) => {
          document.write('DNI: ' + clave + ', Nombre: ' + valor.nombre + ' ' + valor.apellido + '<br>');
        });
      }
    
}


class GestionBandas {
    constructor() {
        this.bandas = [];
    }
  
    agregarBanda(banda) {
        this.bandas.push(banda);
    }
  
    imprimirListadoBandas() {
        document.write('Listados de las bandas:<br>')
        this.bandas.forEach(banda => document.write(banda.nombre + '<br>'));
    }
  
    buscarBandaPorNombre(nombre) {
      const bandaEncontrada = this.bandas.find(banda => banda.nombre === nombre);
      if (bandaEncontrada) {
        bandaEncontrada.mostrarBanda();
      } else {
        document.write(`No se encontró ninguna banda con el nombre: ${nombre}`);
      }
    }
  
    buscarBandasPorEstilo(estilo) {
      const bandasEncontradas = this.bandas.filter(banda => banda.estilo === estilo);
      bandasEncontradas.forEach(banda => banda.mostrarBanda());
    }
  
    ordenarBandasPorAño() {
      this.bandas.sort((a, b) => a.anioFormacion - b.anioFormacion);
      document.write("Bandas ordenadas por año de formación:");
      this.imprimirListadoBandas();
    }
  
    eliminarBanda(nombre) {
      const index = this.bandas.findIndex(banda => banda.nombre === nombre);
      if (index !== -1) {
        this.bandas.splice(index, 1);
        document.write(`La banda ${nombre} ha sido eliminada.`);
      } else {
        document.write(`No se encontró ninguna banda con el nombre: ${nombre}`);
      }
    }
  }