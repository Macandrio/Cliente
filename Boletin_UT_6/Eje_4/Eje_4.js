window.addEventListener('DOMContentLoaded', function() {
    function get_fortune() {
      // a. Obtener la fecha actual
      var hoy = new Date();
  
      // b. Array de dichos
      var dichos = [
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.",
        "Una manzana al día mantiene al doctor en la lejanía.",
        "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.",
        "No te conformes con la mediocridad, pelea por el éxito.",
        "Vive y deja vivir."
      ];
  
      // c. Seleccionar un dicho al azar
      var dichoSeleccionado = dichos[Math.floor(Math.random() * dichos.length)];
  
      // d. Seleccionar el contenedor donde mostrar el resultado
      var divDicho = document.getElementById('divdicho');
      divDicho.innerHTML = ""; // Limpiar contenido anterior si lo hubiera
  
      // e. Crear y añadir el nodo para la fecha
      var fechaTexto = document.createElement('p');
      fechaTexto.textContent = `Hoy es: ${hoy}`;
      divDicho.appendChild(fechaTexto);
  
      // f. Crear y añadir el nodo para el dicho
      var dichoTexto = document.createElement('p');
      var enfasis = document.createElement('em'); // Añadir énfasis al texto
      enfasis.textContent = dichoSeleccionado;
      dichoTexto.textContent = "Hoy la suerte te dice: ";
      dichoTexto.appendChild(enfasis);
      divDicho.appendChild(dichoTexto);
    }
  
    // Llamar a la función para mostrar el dicho
    get_fortune();
  });
  