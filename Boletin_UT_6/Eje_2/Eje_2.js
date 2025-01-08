window.addEventListener('DOMContentLoaded', inicializar);

function inicializar() {
    // a. Crear un nodo <p> y asignarlo a la variable `para`
    var para = document.createElement('p');

    // b. Crear un nodo de texto "Este es el" y asignarlo a la variable `txt1`
    var texto1 = document.createTextNode('Este es el ');

    // c. Añadir `txt1` al nodo `para`
    para.appendChild(texto1);

    // d. Crear un nodo <em> y asignarlo a la variable `enfasis`
    var enfasis = document.createElement('em');
    
    var texto2 = document.createTextNode('Contenido');

    enfasis.appendChild(texto2);

    para.appendChild(enfasis);

    var texto3 = document.createTextNode('de mi parrafo');

    para.appendChild(texto3);

    var testdiv = document.getElementById('divid');
    divid.appendChild(para);

}