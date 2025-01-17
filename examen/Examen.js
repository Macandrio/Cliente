window.addEventListener('load', inicializar);   

function inicializar() {
    document.getElementById('mostrar').addEventListener('click', ocultarviaje);
}

function ocultarviaje(){

    var viajes = [

        {
            "clase_pais":"usa",
            "ciudad_h2":"NewYork,NY",
            "detalle_precio_total":"1,899",
            "detalle_num_noches":7,
            "precio_noche":275,
            "ruta_imagen":"./photos/newyork.jpg",
            "pie_imagen":"Puente Brooklyn"
        },
        
        {"clase_pais":"paris","ciudad_h2":"Paris,Francia","detalle_precio_total":"1,499","detalle_num_noches":5,"precio_noche":300,"ruta_imagen":"./photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
        
        {"clase_pais":"uk","ciudad_h2":"Londres,UK","detalle_precio_total":"2,199","detalle_num_noches":5,"precio_noche":440,"ruta_imagen":"./photos/london.jpg","pie_imagen":"Torre de Londres"}
    ]

    var ocultar_viaje = document.getElementById('mostrar');
    var lista_borrar = [...document.getElementsByTagName('ul')][0];

    if(lista_borrar){

        lista_borrar.remove();
        ocultar_viaje.textContent = 'Mostar Viajes'

    }else{

        ocultar_viaje.textContent = 'Ocultar Viajes'

        // . Crear un nodo <ul> y añadir body
        var lista = document.createElement('ul');
        document.body.appendChild(lista);

        viajes.forEach( viaje => {
        
            // . Crear un nodo <li> y asignarlo al ul
            var lista_li = document.createElement('li');
            lista_li.setAttribute('class', 'viaje' + viaje.clase_pais);
            lista.appendChild(lista_li);

            // . Crear un nodo <h2> añadirlo a <li>
            var lista_h2 = document.createElement('h2');
            lista_h2.textContent = 'viaje ' + viaje.ciudad_h2;
            lista_li.appendChild(lista_h2);

            // . Crear un nodo <span> añadirlo a <li>
            var lista_span = document.createElement('span');
            lista_span.classList.add('detalle');
            lista_span.textContent = viaje.detalle_precio_total + ' por ' + viaje.detalle_num_noches + ' noche';
            lista_li.appendChild(lista_span);

            // . Crear un nodo <button> añadirlo a <li>
            var lista_button = document.createElement('button');
            lista_button.classList.add('reserva');
            lista_button.textContent = 'Resérvalo ya!';
            lista_li.appendChild(lista_button);
            lista_button.addEventListener('click', reservar)

            // . Crear un nodo <ul> añadirlo a <li>
            var lista_ul = document.createElement('ul');
            lista_ul.classList.add('foto');
            lista_li.appendChild(lista_ul);

            // . Crear un nodo <li> añadirlo a <ul>
            var lista_li_2 = document.createElement('li');
            lista_ul.appendChild(lista_li_2);

            // . Crear un nodo <img> añadirlo a <li>
            var lista_img = document.createElement('img');
            lista_img.setAttribute('src' , viaje.ruta_imagen);
            lista_li_2.appendChild(lista_img);

            lista_img.addEventListener('mousemove' , function(){
                                                                lista_span.classList.add('destacado');
            });

            lista_img.addEventListener('mouseleave' , function(){
                                                                lista_span.classList.remove('destacado');
            });

            // . Crear un nodo <span> añadirlo a <li>
            var lista_span_2 = document.createElement('span');
            lista_span_2.textContent = viaje.pie_imagen;
            lista_li_2.appendChild(lista_span_2);

            lista_span_2.addEventListener('mousemove' , function(){
                                                                lista_span.classList.add('destacado');
            });

            lista_span_2.addEventListener('mouseleave' , function(){
                                                                lista_span.classList.remove('destacado');
            });

        })
    }
}

function reservar(){

    var botones=document.getElementsByClassName('reserva');

    for (let boton of botones){

        boton.addEventListener('click',function(){
    
            //creo el input
            var entrada = document.createElement('input');
            document.body.appendChild(entrada);
    
            //para que aparezca el nombre en el input
            entrada.setAttribute('placeholder','nombre');
                
            //creo el boton para enviar
            var botonenviar=document.createElement('button')
            document.body.appendChild(botonenviar);
                
        })
    }
}


    