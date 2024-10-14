//En una nueva ventana, imprimir todas las propiedades del objeto navigator


// Abrir una nueva ventana
let nuevaVentana = window.open("", "Nueva Ventana", "width=400,height=400");

// Obtener todas las propiedades del objeto navigator
let propiedadesNavigator = Object.keys(navigator);

// Imprimir todas las propiedades en la nueva ventana
nuevaVentana.document.write("<h3>Propiedades del objeto Navigator:</h3>");
nuevaVentana.document.write("<ul>");

propiedadesNavigator.forEach(function(propiedad) {
    nuevaVentana.document.write("<li>" + propiedad + ": " + navigator[propiedad] + "</li>");
});

nuevaVentana.document.write("</ul>");
