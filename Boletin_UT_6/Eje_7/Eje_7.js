window.addEventListener('DOMContentLoaded', inicializar);   

function inicializar() {
    // Seleccionar el contenedor donde se insertará la tabla
    var tablaContainer = document.getElementById('tabla-container');
  
    // Crear el elemento <table>
    var tabla = document.createElement('table');
    tabla.id = 'tabla-ejercicio';
  
    // Crear las 20 filas y 20 columnas
    for (let i = 0; i < 20; i++) {
      var fila = document.createElement('tr'); // Crear una fila
  
      for (let j = 0; j < 20; j++) {
        var celda = document.createElement('td'); // Crear una celda
        celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`; // Añadir texto a la celda
        fila.appendChild(celda); // Añadir la celda a la fila
      }
  
      tabla.appendChild(fila); // Añadir la fila a la tabla
    }
  
    // Añadir la tabla al contenedor
    tablaContainer.appendChild(tabla);
  
    // Crear el enlace para mostrar/ocultar la tabla
    var enlaceContainer = document.getElementById('enlace-container');
    var enlace = document.createElement('a');
    enlace.href = '#';
    enlace.textContent = 'Mostrar/Ocultar Tabla';
  
    // Añadir el evento al enlace
    enlace.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar que el enlace recargue la página
  
      // Mostrar u ocultar la tabla
      if (tabla.style.display === 'none') {
        tabla.style.display = 'table'; // Mostrar la tabla
      } else {
        tabla.style.display = 'none'; // Ocultar la tabla
      }
    });
  
    // Añadir el enlace al contenedor
    enlaceContainer.appendChild(enlace);
  }
  