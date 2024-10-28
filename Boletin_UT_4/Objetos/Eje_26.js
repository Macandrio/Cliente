/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos
para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la
base y la altura del rectángulo a partir de los puntos*/

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
            }else{
                this.cuadrante = 4;
                return this.cuadrante;
            }
        }


    imprimir = function() {
                return 'X es: ' + this.x + '<br> Y es: ' + this.y + '<br>Esta en el cuadrante: ' + this.cuadrante() + '<br>';
            }
        
}

class​ ​ Rectangulo​ ​ extends​ ​ Punto {
    constructor​(punto , punto){
         super(x,y);
         this.base = calcularBase;
         this.altura =  calcularAltura;
    };

    function calcularBase(){
        this.x
    }
};

