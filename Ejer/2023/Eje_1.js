const banda1 = new Banda('Lostrogos', 2020, 630334651, 'Rock');
const banda2 = new Banda('Lastrigues', 2019, 123456789, 'Jazz');

banda1.añadirIntegrante('Alejandro', 'Gómez' , '23883999V');
banda1.añadirIntegrante('Fran', 'Rivera' , '23883949V');

banda1.mostrarBanda();
banda1.mostrarIntegrantes();


const gestion = new GestionBandas();

gestion.agregarBanda(banda1);
gestion.agregarBanda(banda2);

gestion.imprimirListadoBandas();

gestion.buscarBandaPorNombre('Lostrogos')



gestion.agregarBanda(new Banda("Los Rockeros", 1995, "123456789", "Rock"));
gestion.agregarBanda(new Banda("Los Clásicos", 2005, "987654321", "Clásica"));
gestion.agregarBanda(new Banda("Los Jazzistas", 1980, "112233445", "Jazz"));
gestion.agregarBanda(new Banda("Los Metaleros", 1990, "998877665", "Metal"));
gestion.agregarBanda(new Banda("Los Electrónicos", 2010, "223344556", "Electrónica"));

gestion.ordenarBandasPorAño();
