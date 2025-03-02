import { Reserva } from "./Reserva.js"; 

var reservas = [];


// 1️⃣ Registrar nuevas reservas (verificando que la fecha de check-out sea mayor que la de check-in).
function registrarReservas(reserva) {   
    if(reserva.fecha_entrada < reserva.fecha_salida){
        let encontrado = reservas.find(r => r.codigo_reserva === reserva.codigo_reserva)

        if (!encontrado) {
            reservas.push(reserva)
            console.log('Reserva añadida')
            reserva.toString();
        }else{
            console.log('Ese codigo ya esta en uso')
        }

    }else{
        console.log('La fecha de salida debe ser posterior a la de entrada')
    }
}


// 2️⃣ Listar todas las reservas con sus detalles
function MostrarReservas() {
    reservas.forEach(reserva => reserva.toString()); // ✅ Ahora sí se ejecuta
}


// 3️⃣ Buscar una reserva por código (RES-XXXXX).
function buscarCodigo(codigo) {
    var reservaencontrada = reservas.find(r => r.codigo_reserva === codigo)
    
    if(reservaencontrada){
        console.log('Reserva encontrada')
        reservaencontrada.toString();
    }else{
        console.log('La reserva no esiste')
    }
}

//4️⃣ Filtrar reservas por fecha de check-in.

function Reservasporfecha(fechaBuscada) {
    fechaBuscada = new Date(fechaBuscada)
    var filtrofecha = reservas.filter(r => r.fecha_entrada.getTime() === fechaBuscada.getTime());
    if (filtrofecha.length > 0){
            filtrofecha.forEach(reserva => reserva.toString());
    }else{
            console.log('No hay resevas con esa fecha de entrada')
    }
}


// 5️⃣ Modificar la fecha de check-out de una reserva.

function modificarFecha(codigo , fecha) {
    fecha = new Date(fecha)
    var reservaencontrada = reservas.find(r => r.codigo_reserva === codigo)
    
    if(reservaencontrada){
        console.log('Fecha Sin Modificada')
        reservaencontrada.toString();
        console.log('Fecha Modificada')
        reservaencontrada.fecha_salida = fecha;
        reservaencontrada.toString();
    }else{
        console.log('La reserva no esiste')
    }
}


// 6️⃣ Eliminar una reserva.

function Eliminarreserva(codigo) {
    var index = reservas.findIndex(r => r.codigo_reserva === codigo)
    
    if(index !== -1){
        console.log('Reserva Eliminada')
        reservas.splice(index,1)
        MostrarReservas()

    }else{
        console.log('La reserva no esiste')
    }
}


//Pruebas

const reserva1 = new Reserva("ABC-12345", "Juan Pérez", "2025-03-10", "2025-03-15", 101);
const reserva2 = new Reserva("ABD-12345", "Ana López", "2025-04-01", "2025-04-05", 202);
const reserva3 = new Reserva("LMN-67890", "Carlos Gómez", "2025-05-10", "2025-05-15", 303);


registrarReservas(reserva1);
registrarReservas(reserva2);
registrarReservas(reserva3);



console.log('Reservas Mostrar')
MostrarReservas()

console.log('Buscar Reserva pòr codigo')
buscarCodigo('ABC-12345')


console.log('Buscar Reserva pòr fecha')
Reservasporfecha('2025-03-10');


console.log('Modificar fecha')
modificarFecha("LMN-67890",'2025-03-10');

console.log('Eliminar Reserva')
Eliminarreserva("LMN-67890");