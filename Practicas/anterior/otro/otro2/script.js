window.addEventListener('load', inicializar);

function inicializar() {
    document.getElementById('mostrar').addEventListener('click', toggleViajes);
}

function toggleViajes() {
    var viajes = [
        {
            "clase_pais":"usa",
            "ciudad_h2":"NewYork,NY",
            "detalle_precio_total":"1,899",
            "detalle_num_noches":7,
            "precio_noche":275,
            "ruta_imagen":" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s ",
            "pie_imagen":"Puente Brooklyn"
        },
        
        {
            "clase_pais":"paris",
            "ciudad_h2":"Paris,Francia",
            "detalle_precio_total":"1,499",
            "detalle_num_noches":5,
            "precio_noche":300,
            "ruta_imagen":"C:\Users\aleja\OneDrive\Escritorio\paris.jpg",
            "pie_imagen":"Notre Dame de Paris"
        },

        {
            "clase_pais":"uk",
            "ciudad_h2":"Londres,UK",
            "detalle_precio_total":"2,199",
            "detalle_num_noches":5,
            "precio_noche":440,
            "ruta_imagen":"./photos/london.jpg",
            "pie_imagen":"Torre de Londres"
        }
    ];
    
    var botonMostrar = document.getElementById('mostrar');
    var listaExistente = document.querySelector('ul');

   

    if (listaExistente) {
        listaExistente.remove();
        botonMostrar.textContent = "MOSTRAR VIAJES";
    } else {
        //Crea la lista
        var lista = document.createElement('ul');

        viajes.forEach((viaje) => {
            var item = document.createElement('li');
            item.className = `viaje ${viaje.clase_pais}`;

            var titulo = document.createElement('h2');
            titulo.textContent = viaje.ciudad_h2;

            var detalle = document.createElement('span');
            detalle.className = "detalle";
            detalle.textContent = `${viaje.detalle_precio_total}€ por ${viaje.detalle_num_noches} noches`;

            var botonReserva = document.createElement('button');
            botonReserva.className = "reserva";
            botonReserva.textContent = "Resérvalo ya!";
            botonReserva.addEventListener('click', () => manejarReserva(viaje));

            var listaFotos = document.createElement('ul');
            listaFotos.className = "fotos";

            var fotoItem = document.createElement('li');
            var imagen = document.createElement('img');
            imagen.src = viaje.ruta_imagen;
            imagen.alt = viaje.pie_imagen;
            imagen.setAttribute('style', 'height:150px')

            // Evento de destacar precio por noche al pasar por la imagen o pie
            imagen.addEventListener('mouseenter', () => detalle.classList.add('destacado'));
            imagen.addEventListener('mouseleave', () => detalle.classList.remove('destacado'));

            var pieImagen = document.createElement('span');
            pieImagen.textContent = viaje.pie_imagen;
            pieImagen.addEventListener('mouseenter', () => detalle.classList.add('destacado'));
            pieImagen.addEventListener('mouseleave', () => detalle.classList.remove('destacado'));

            fotoItem.appendChild(imagen);
            fotoItem.appendChild(pieImagen);
            listaFotos.appendChild(fotoItem);

            item.appendChild(titulo);
            item.appendChild(detalle);
            item.appendChild(botonReserva);
            item.appendChild(listaFotos);

            lista.appendChild(item);
        });

        document.body.appendChild(lista);
        botonMostrar.textContent = "OCULTAR VIAJES";
    }
}

function manejarReserva(viaje) {
    const nombre = prompt("Introduce tu nombre para completar la reserva:");
    if (nombre) {
        setCookie("nombreUsuario", nombre, 7); // Guarda el nombre en una cookie válida por 7 días
        alert(`Reserva realizada con éxito para ${viaje.ciudad_h2}. ¡Gracias, ${nombre}!`);
    } else {
        alert("Debes introducir un nombre para completar la reserva.");
    }
}

// Función para establecer cookies
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor};${expiracion};path=/`;
}

// Función para obtener el valor de una cookie
function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreEQ) === 0) {
            return cookie.substring(nombreEQ.length);
        }
    }
    return null;
}
