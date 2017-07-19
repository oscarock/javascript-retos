// definir una función llamada flatten que reciba un arreglo de arreglos y
// los convierta en un único arreglo que contenga todos los elementos
// de los arreglos internos.
//
// Ejemplos:
//
// flatten([[1], [2]]) // => [1, 2]
// flatten([[1, 2, 3], [4, 5], [6]]); // => [1, 2, 3, 4, 5, 6]

// mi solucion
function flatten(array1){
    return [].concat.apply([], array1)
}

// solucion plataforma
function flatten(arr) {
  return arr.reduce(function(memo, a) {
    return memo.concat(a);
  }, []);
}
