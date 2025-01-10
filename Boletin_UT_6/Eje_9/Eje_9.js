window.addEventListener('load', inicializar);   

function inicializar() {
    json();
    [...document.getElementsByTagName('img')].forEach(elemento => elemento.addEventListener('click',ocultarinformacion));

}

function ocultarinformacion (e){
    var imagen = e.currentTarget;
    imagen.parentNode.childNodes.forEach( hijo => {
        if(hijo.getAttribute('style') == 'display:none' && hijo != hijo.parentNode.childNodes[0]){
            hijo.setAttribute('style', 'display:block'); // Mostrar
        }else{
            if(hijo != hijo.parentNode.childNodes[0]){
                hijo.setAttribute('style', 'display:none'); // Ocultar
            }
        }
    })


}

function json(){
    var json = 
            [
                {src:"https://inmofotos.es/wp-content/uploads/2021/10/imagen-1_Mesa-de-trabajo-1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
                {src:"https://img.freepik.com/foto-gratis/retrato-hombre-estilo-dibujos-animados_23-2151134275.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
            ];
        

    // . Crear un nodo <div> y asignarlo a la variable `para`
    var cont = document.createElement('div');
    cont.setAttribute('id','todos-los-viajes')
    document.body.appendChild(cont);

    // . Crear un nodo <h1> y <ul> y asignarlo al div padre
    var titulo = document.createElement('h1');
    titulo.textContent = 'Subtitulos'
    cont.appendChild(titulo);
    
    var listades = document.createElement('ul');
    cont.appendChild(listades);

    // . Recorremos el Json

    json.forEach(elemento => {

        // . Crear un nodo <li> y asignarlo al ul
        var listaimg = document.createElement('li');
        listades.appendChild(listaimg);
    
        // . Crear un nodo <img> y asignarlo al li
        var imagenes = document.createElement('img');
        listaimg.appendChild(imagenes);
        imagenes.setAttribute('src', elemento.src)
        imagenes.setAttribute('style', 'height:150px')
        imagenes.setAttribute('id','imagen')

        // . Crear un nodo <p> y asignarlo al li
        var p = document.createElement('p');
        p.textContent = elemento.desc;
        listaimg.appendChild(p);

        // . Crear un nodo <ul> y asignarlo al li
        var ul = document.createElement('ul');
        ul.setAttribute('class','specs')
        listaimg.appendChild(ul);

        elemento.specs.forEach(elementoy => {

            // . Crear un nodo <li> y asignarlo al ul
            var listaul = document.createElement('li');
            listaul.textContent = elementoy
            ul.appendChild(listaul);

        })

    });
  
}