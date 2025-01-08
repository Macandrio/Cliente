window.addEventListener('DOMContentLoaded', inicializar);   
     
function inicializar() {
    // Seleccionar el contenedor donde se insertará la tabla
    const tablaContainer = document.getElementById('tabla-container');
  
    // Crear el elemento <table>
    const tabla = document.createElement('table');
  
    // Crear las 20 filas
    for (let i = 0; i < 20; i++) {
      const fila = document.createElement('tr'); // Crear una fila
  
      // Crear las 20 columnas para cada fila
      for (let j = 0; j < 20; j++) {
        const celda = document.createElement('td'); // Crear una celda
        celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`; // Añadir texto a la celda
        fila.appendChild(celda); // Añadir la celda a la fila
      }
  
      tabla.appendChild(fila); // Añadir la fila a la tabla
    }
  
    // Añadir la tabla al contenedor
    tablaContainer.appendChild(tabla);
}
  