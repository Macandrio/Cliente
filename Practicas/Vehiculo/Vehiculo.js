export class Vehiculo {

    constructor(matricula , marca, modelo, anio_fabricante, km){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.anio_fabricante = new Date(anio_fabricante);
        this.km = km;
    }
    
    MostrarVehiculo(){
        console.log('🚗 El Vehiculo: ' + this.matricula + '| Marca: ' + this.marca + ' | Modelo: ' + this.modelo + ' | Año: ' + this.anio_fabricante + '| Km: ' + this.km)
    }
}