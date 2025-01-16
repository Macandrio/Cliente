window.addEventListener('load', inicializar);

function inicializar() {
    const noticias = [
        { titular: "Noticia 1", resumen: "Resumen de la noticia 1", descripcion: "Esta es la noticia 1" },
        { titular: "Noticia 2", resumen: "Resumen de la noticia 2", descripcion: "Esta es la noticia 2" },
        { titular: "Noticia 3", resumen: "Resumen de la noticia 3", descripcion: "Esta es la noticia 3" }
    ];

    const contenedorNoticias = document.getElementById('noticias');

    noticias.forEach((noticia, index) => {
        // Crear elementos
        const divNoticia = document.createElement('div');
        divNoticia.classList.add('noticia');

        const titulo = document.createElement('h2');
        titulo.textContent = noticia.titular;

        const resumen = document.createElement('p');
        resumen.textContent = noticia.resumen;

        const descripcion = document.createElement('p');
        descripcion.textContent = noticia.descripcion;
        descripcion.classList.add('descripcion');

        const boton = document.createElement('button');
        boton.textContent = 'Mostrar';
        boton.classList.add('boton');
        boton.addEventListener('click', () => {
            if (descripcion.style.display === 'none') {
                descripcion.style.display = 'block';
                boton.textContent = 'Ocultar';
            } else {
                descripcion.style.display = 'none';
                boton.textContent = 'Mostrar';
            }
        });

        // Añadir elementos al contenedor de noticias
        divNoticia.appendChild(titulo);
        divNoticia.appendChild(resumen);
        divNoticia.appendChild(boton);
        divNoticia.appendChild(descripcion);
        contenedorNoticias.appendChild(divNoticia);
    });
}
