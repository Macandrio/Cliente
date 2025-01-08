window.addEventListener('DOMContentLoaded', inicializar);   

function inicializar() {
    // Seleccionar el contenedor para el enlace
    const enlaceContainer = document.getElementById('enlace-container');
    
    // Crear un elemento <a> (enlace)
    const enlace = document.createElement('a');
    enlace.textContent = 'Ir a Google'; // Texto visible del enlace
    enlace.href = 'https://www.google.com'; // Asignar atributo href
    enlace.target = '_blank'; // Abrir en una nueva pestaña
    enlace.title = 'Enlace a Google'; // Asignar atributo title
  
    // Añadir el enlace al contenedor
    enlaceContainer.appendChild(enlace);
  
    // Seleccionar el contenedor para los atributos
    const atributosContainer = document.getElementById('atributos-container');
  
    // Crear un nuevo div para mostrar los atributos
    const atributosDiv = document.createElement('div');
    atributosDiv.textContent = `Atributos del enlace:
    - href: ${enlace.href}
    - target: ${enlace.target}
    - title: ${enlace.title}`;
    
    // Añadir el div al contenedor de atributos
    atributosContainer.appendChild(atributosDiv);
  }