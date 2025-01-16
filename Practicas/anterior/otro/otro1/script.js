window.addEventListener('load', inicializar);

function inicializar() {
    const noticiasDiv = document.getElementById('noticias');
    const noticiasJSON = [
        { titular: "Noticia 1", resumen: "Resumen de la noticia 1", descripcion: "Esta es la noticia 1" },
        { titular: "Noticia 2", resumen: "Resumen de la noticia 2", descripcion: "Esta es la noticia 2" },
        { titular: "Noticia 3", resumen: "Resumen de la noticia 3", descripcion: "Esta es la noticia 3" },
    ];

    // Crear dinámicamente las noticias
    noticiasJSON.forEach((noticia, index) => {
        const noticiaDiv = document.createElement('div');
        noticiaDiv.className = 'noticia';

        const titular = document.createElement('h2');
        titular.textContent = noticia.titular;

        const resumen = document.createElement('p');
        resumen.textContent = noticia.resumen;

        const contenido = document.createElement('p');
        contenido.textContent = noticia.descripcion;
        contenido.style.display = 'none'; // Inicialmente oculto

        const boton = document.createElement('img');
        boton.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s'; // Cambia esto por la ruta de tu imagen "mostrar"
        boton.alt = 'Mostrar contenido';
        boton.style.cursor = 'pointer';

        boton.addEventListener('click', () => {
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block';
                boton.src = 'ocultar.png'; // Cambia esto por la ruta de tu imagen "ocultar"
                boton.alt = 'Ocultar contenido';
            } else {
                contenido.style.display = 'none';
                boton.src = 'mostrar.png';
                boton.alt = 'Mostrar contenido';
            }
        });

        // Agregar elementos al bloque de noticia
        noticiaDiv.appendChild(titular);
        noticiaDiv.appendChild(resumen);
        noticiaDiv.appendChild(boton);
        noticiaDiv.appendChild(contenido);

        noticiasDiv.appendChild(noticiaDiv);
    });
}
