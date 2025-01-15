window.addEventListener('load', inicializar);   

function inicializar() {
  document.getElementById('ocultar-mostrar').addEventListener('click', borrarinsertar);
}

function borrarinsertar() {
  // Seleccionar el contenedor de la tabla
  var tablaContainer = document.getElementById('tabla-container');

  // Verificar si ya existe una tabla
  var tablaExistente = [...document.getElementsByTagName("table")][0];

  if (tablaExistente) {
    // Si la tabla existe, eliminarla
    tablaExistente.remove();
  } else {
    // Si no existe, crear una nueva tabla
    var tabla = document.createElement('table');
    tabla.id = 'tabla-ejercicio';

    // Crear las 20 filas y 20 columnas
    for (let i = 0; i < 20; i++) {
      var fila = document.createElement('tr');

      for (let j = 0; j < 20; j++) {
        var celda = document.createElement('td');
        celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
        fila.appendChild(celda);
      }

      tabla.appendChild(fila);
    }

    // Añadir la tabla al contenedor
    tablaContainer.appendChild(tabla);
  }
}

  