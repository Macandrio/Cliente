import { Vehiculo } from "./Vehiculo.js";


var lista_vehiculos = [];


// Mostrar en consola
//console.log(vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6, vehiculo7, vehiculo8, vehiculo9, vehiculo10);



// 1️⃣ Registrar nuevos vehículos.
function RegistraVehiculos(vehiculo) {
    if(lista_vehiculos.some(i => i.matricula === vehiculo.matricula )){
        console.log(' Esta matricula ' + vehiculo.matricula + ' Ya esta en uso')
    }else{
        lista_vehiculos.push(vehiculo);
        console.log('Se ha intoducido el vehiculo correctamente')
        console.log(vehiculo)
    }
}

// 2️⃣ Listar todos los vehículos registrados.
function MostrarListaVehiculo(){
    lista_vehiculos.forEach(vehiculo => vehiculo.MostrarVehiculo());
}

// 3️⃣ Buscar un vehículo por matrícula.
function BuscarVehiculos(matricula){
    let vehiculo =  lista_vehiculos.find(i => i.matricula === matricula);
    if (vehiculo) {
        console.log(`📌 Vehículo encontrado con matrícula ${matricula}:`);
        vehiculo.MostrarVehiculo();
    } else {
        console.log(`❌ No se encontró un vehículo con matrícula ${matricula}.`);
    }
}

// 4️⃣ Filtrar vehículos por marca o por año de fabricación.
function Filtrado(marca) {
    let lista_marca = lista_vehiculos.filter(v => v.marca.toLowerCase() === marca.toLowerCase())

    lista_marca.forEach(v => v.MostrarVehiculo())
}

// 5️⃣ Actualizar el kilometraje de un vehículo.
function actualizarKilometraje(matricula, nuevoKilometraje) {
    let vehiculo = lista_vehiculos.find(v => v.matricula === matricula);
    if (vehiculo) {
        vehiculo.kilometraje = nuevoKilometraje;
        console.log(`✅ Kilometraje del vehículo con matrícula ${matricula} actualizado a ${nuevoKilometraje} km.`);
    } else {
        console.log(`❌ No se encontró un vehículo con matrícula ${matricula}.`);
    }
}

// 6️⃣ Eliminar un vehículo del registro.
function eliminarVehiculo(matricula) {
    let index = lista_vehiculos.findIndex(v => v.matricula === matricula);
    if (index !== -1) {
        lista_vehiculos.splice(index, 1);
        console.log(`✅ Vehículo con matrícula ${matricula} eliminado.`);
    } else {
        console.log(`❌ No se encontró un vehículo con matrícula ${matricula}.`);
    }
}



// Crear 10 vehículos con diferentes datos
var vehiculo1 = new Vehiculo('8201-HTN', 'Seat', 'Panda', '2023-05-01', 200000);
var vehiculo2 = new Vehiculo('3421-GFD', 'Toyota', 'Corolla', '2018-07-15', 120000);
var vehiculo3 = new Vehiculo('9012-KLM', 'Ford', 'Fiesta', '2019-09-10', 85000);
var vehiculo4 = new Vehiculo('5678-XYZ', 'Honda', 'Civic', '2020-01-25', 50000);
var vehiculo5 = new Vehiculo('1234-ABC', 'Volkswagen', 'Golf', '2022-03-05', 30000);
var vehiculo6 = new Vehiculo('6789-DEF', 'Renault', 'Clio', '2017-06-20', 150000);
var vehiculo7 = new Vehiculo('4321-IJK', 'Mercedes', 'Benz C-Class', '2021-11-11', 40000);
var vehiculo8 = new Vehiculo('8765-LMN', 'BMW', 'X5', '2015-04-17', 180000);
var vehiculo9 = new Vehiculo('2345-OPQ', 'Audi', 'A4', '2016-08-30', 95000);
var vehiculo10 = new Vehiculo('7890-RST', 'Nissan', 'Qashqai', '2019-12-12', 70000);
var vehiculo11 = new Vehiculo('8101-HTN', 'Seat', 'Panda', '2023-05-01', 200000);

console.log('| Registrar Vehiculo');
RegistraVehiculos(vehiculo1);
RegistraVehiculos(vehiculo2);
RegistraVehiculos(vehiculo11);



console.log('| Mostrar la lista de vehiculos');
MostrarListaVehiculo();

console.log('| Buscar Matricula');
BuscarVehiculos('8201-HTN');




console.log('| Filtear por Modelo');
Filtrado('Seat');


console.log('| Actualizar km')
actualizarKilometraje('8201-HTN' , 280000)



eliminarVehiculo('8201-HTN')