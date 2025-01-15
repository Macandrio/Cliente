window.addEventListener('load', inicializar);   

function inicializar() {
    document.getElementById('mostrar').addEventListener('click',ocultarinformacion);
    document.getElementsByTagName('img').addEventListener('mouseenter',añadirclase);
}

function añadirclase(e){
    var span = e.currentTarget
}

function ocultarinformacion(){

    var viajes = [
        {
            "clase_pais":"usa",
            "ciudad_h2":"New York,NY",
            "detalle_precio_total":"1,899",
            "detalle_num_noches":7,
            "precio_noche":275,
            "ruta_imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLrq4s4xwmnVwnLBDcBPH7CZY4SSto1DoDA&s",
            "pie_imagen":"Puente Brooklyn"
        },

        {
            "clase_pais":"paris",
            "ciudad_h2":"Paris,Francia",
            "detalle_precio_total":"1,499",
            "detalle_num_noches":5,
            "precio_noche":300,
            "ruta_imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRujQ3RB6QkdaK5g_Tewt_LFEuBQ7-hHRwFQ&s",
            "pie_imagen":"Notre Dame de Paris"
        },

        {
            "clase_pais":"uk",
            "ciudad_h2":"Londres,UK",
            "detalle_precio_total":"2,199",
            "detalle_num_noches":5,
            "precio_noche":440,
            "ruta_imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRujQ3RB6QkdaK5g_Tewt_LFEuBQ7-hHRwFQ&s",
            "pie_imagen":"Torre de Londres"
        }
    ]

    var mostrar_ocultar = document.getElementById('mostrar');
    var oculto = [...document.getElementsByTagName('ul')][0];
    
    
    if(oculto){
        oculto.remove();
        mostrar_ocultar.textContent = 'Mostrar Viajes'
    }else{
        
        //creo la lista y la añado al body    
        var lista = document.createElement('ul');
        document.body.appendChild(lista);

        viajes.forEach(viaje => {
            mostrar_ocultar.textContent = 'Ocultar Viajes'

            // . Crear un nodo <li> y asignarlo al ul
            var lista_li = document.createElement('li');
            lista_li.className = 'viaje' + viaje.clase_pais; // . añadir la clase
            lista.appendChild(lista_li);
    
            // . Crear un nodo <h2> y asignarlo al li
            var lista_h2 = document.createElement('h2');
            lista_h2.textContent = viaje.ciudad_h2; // . añadir el texto
            lista_li.appendChild(lista_h2);
    
            // . Crear un nodo <span> y asignarlo al li
            var lista_span = document.createElement('span');
            lista_span.className = 'detalle'; // . añadir la clase
            lista_span.textContent = viaje.detalle_precio_total + ' por ' + viaje.detalle_num_noches + ' noches '; // . añadir el texto
            lista_li.appendChild(lista_span);
    
            // . Crear un nodo <button> y asignarlo al li
            var lista_button = document.createElement('button');
            lista_button.className = 'reserva'; // . añadir la clase
            lista_button.textContent = 'Reserva ya'; // . añadir el texto
            lista_li.appendChild(lista_button);
    
            // . Crear un nodo <ul> y asignarlo al li
            var lista_ul = document.createElement('ul');
            lista_ul.className = 'fotos'; // . añadir la clase
            lista_li.appendChild(lista_ul);
    
            // . Crear un nodo <li> y asignarlo al ul
            var lista_li_2 = document.createElement('li');
            lista_ul.appendChild(lista_li_2);
    
            // . Crear un nodo <img> y asignarlo al li
            var lista_img = document.createElement('img');
            lista_img.setAttribute('src', viaje.ruta_imagen)
            lista_li_2.appendChild(lista_img);
    
            // . Crear un nodo <span> y asignarlo al li
            var lista_span_2 = document.createElement('span');
            lista_span_2.textContent = viaje.pie_imagen; // . añadir el texto
            lista_li_2.appendChild(lista_span_2);
        

             // Añadir eventos a la imagen y pie
            // lista_img.addEventListener('mouseenter', () => lista_span.classList.add('destacado'));
            // lista_img.addEventListener('mouseleave', () => lista_span.classList.remove('destacado'));
 
            // lista_span_2.addEventListener('mouseenter', () => lista_span.classList.add('destacado'));
            // lista_span_2.addEventListener('mouseleave', () => lista_span.classList.remove('destacado'));

        });
    }
      
}
