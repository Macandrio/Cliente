/*Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo
array después de eliminar los elementos repetidos*/


function eliminarRepetidos(array) {
    // Usar un Set para eliminar duplicados y luego convertirlo a un array
    return Array.from(new Set(array));
  }
  
  // Ejemplo de uso
  const numeros = [1, 2, 2, 3, 3, 4, 4, 5, 6, 7];
  const numerosSinRepetidos = eliminarRepetidos(numeros);
  
  document.write(numerosSinRepetidos);
  