/*Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante
en el que está.*/



function Punto (x,y){
    this.x = x;
    this.y = y;
    this.cuadrante = 
        function (){
            if(this.x > 0 && this.y > 0){
                this.cuadrante = 1;
                return this.cuadrante;
            }else if(this.x < 0 && this.y > 0){
                this.cuadrante = 2;
                return this.cuadrante;
            }else if(this.x < 0 && this.y < 0){
                this.cuadrante = 3;
                return this.cuadrante;
            }else
                this.cuadrante = 4;
                return this.cuadrante;
            }

    this.imprimir = function() {
                return 'X es: ' + this.x + '<br> Y es: ' + this.y + '<br>Esta en el cuadrante: ' + this.cuadrante() + '<br>';
            }
        
}

var punto = new Punto(1,1);
document.write(punto.imprimir());