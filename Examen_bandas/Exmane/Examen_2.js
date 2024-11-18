function imprimirListadoBandas(gestion){
    gestion.forEach(banda => {
        document.write('La Banda es: ' + banda.nombre + ', Año Formacion:' + banda.anioFormacion + ', Telefono' + banda.telefono + ', Estilo de Musica: ' + banda.estilo + '<br>')
    });
}

function ordenarBandasPorAño(gestion){
    gestion.sort((a, b) => a.anioFormacion - b.anioFormacion);
        document.write("Bandas ordenadas por año de formación:");
        imprimirListadoBandas(gestion);
}

function buscarBandaPorNombre(nombre , gestion){
    if(gestion.includes(nombre)){
        document.write('Se ha encontrado un grupo')
        document.write(banda[banda.indexOf(banda => banda.nombre === nombre)])
    }
}

var banda1 = new Banda('Condescaro', '2004', 630334651, 'Rock');
var banda2 = new Banda('grupo2', '2006', 630664651, 'Jazz');
var banda3 = new Banda('dfef', '2007', 630335651, 'Pop');
var banda4 = new Banda('grupo4', '2000', 630564651, 'Jazz');

banda1.MostrarBanda();
banda2.MostrarBanda();

banda1.añadirintegrante('Alejandro', 'Gomez' , '23883799V');
banda1.añadirintegrante('pepe', 'Gomez' , '23883999V');

banda1.mostrarIntegrantes();

var gestion = [];

gestion.push(banda1);
gestion.push(banda2);
gestion.push(banda3);
gestion.push(banda4);

imprimirListadoBandas(gestion);
ordenarBandasPorAño(gestion);
buscarBandaPorNombre('Condescaro' , gestion);