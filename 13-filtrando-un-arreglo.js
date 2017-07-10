// crear una función llamada filter que reciba como argumentos un arreglo y
// una función. Para cada elemento del arreglo, la función filter deberá
// invocar la función que llega como argumento
// (que recibe un número y devuelve true o false) y retornar un nuevo arreglo
// con los elementos para los que la función haya retornado true.
//
// Ejemplos:
//
// var even = function(i) { return i % 2 === 0 };
// filter([1, 2, 3, 4], even) // => [2, 4]
//
// var none = function(i) { return false; };
// filter([1, 2, 3, 4], none) // => []

// mi solucion
function filter(array,callback){
    var result = []
    array.map(function(element) {
        // console.log(callback(element));
        // console.log(element % 2 === 0);
        result.push(callback(element))

    })
    console.log(result)
}

filter([1, 2, 3, 4], function(i){
    i % 2 == 0
})

// function transform(array,callback){
//     var result = []
//     array.map(function(element) {
//       result.push(callback(element))
//     })
//     return result
// }
