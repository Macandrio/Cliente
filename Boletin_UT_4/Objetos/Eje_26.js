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
            }else
                this.cuadrante = 4;
                return this.cuadrante;
            }

    this.imprimir = function() {
                return 'X es: ' + this.x + '<br> Y es: ' + this.y + '<br>Esta en el cuadrante: ' + this.cuadrante() + '<br>';
            }
        
}

var punto = new Punto(5,8);
var punto1 = new Punto(7,6);
document.write(punto.imprimir());


function Rectangulo(coordenada1, coordenada2) {
    this.coordenada1 = coordenada1;
    this.coordenada2 = coordenada2;

    this.calcularBase = function() {
        return (this.coordenada2.x + this.coordenada1.x);
    }

    this.calcularAltura = function() {
        return (this.coordenada2.y + this.coordenada1.y);
    }

    this.perimetro = function() {
        let base = this.calcularBase();
        let altura = this.calcularAltura();
        return 2 * (base + altura);
    }

    this.area = function() {
        let base = this.calcularBase();
        let altura = this.calcularAltura();
        return base * altura;
    }
}

var rectangulo1 = new Rectangulo(punto, punto1);

document.write("<br>la base del rectángulo es: " + rectangulo1.calcularBase());
document.write("<br>la base del rectángulo es: " + rectangulo1.calcularAltura());
document.write("<br>El perímetro del rectángulo es: " + rectangulo1.perimetro());
document.write("<br>El área del rectángulo es: " + rectangulo1.area());