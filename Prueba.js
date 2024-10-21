function dividir(a, b) {
    try {
        
        if (b === 0) {
            throw new Error("No se puede dividir por 0");
        }
        let resultado = a / b;
        alert("El resultado de la división es: " + resultado);

    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Llamamos a la función
dividir(10, 0);