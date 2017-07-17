// definir una función llamada flatten que reciba un arreglo de arreglos y
// los convierta en un único arreglo que contenga todos los elementos
// de los arreglos internos.
//
// Ejemplos:
//
// flatten([[1], [2]]) // => [1, 2]
// flatten([[1, 2, 3], [4, 5], [6]]); // => [1, 2, 3, 4, 5, 6]

function flatten(array1,array2){
    var array_concat = array1.concat(array2)
    return array_concat
}
console.log(flatten([[1], [2]]))
console.log(flatten([[1, 2, 3], [4, 5], [6]]));
