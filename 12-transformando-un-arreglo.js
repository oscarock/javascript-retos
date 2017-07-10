// definir una función llamada transform que reciba un arreglo y una función.
// Para cada elemento del arreglo, la función transform deberá invocar la función
// que llega como argumento e ir creando un nuevo arreglo con los resultados.
//
// Ejemplos:
//
// var duplicate = function(i) { return i * 2; };
// transform([1, 2, 3], duplicate) // => [2, 4, 6]
//
// var increase = function(i) { return i + 10; };
// transform([1, 2, 3], increase) // => [11, 12, 13]

// mi solucion
function transform(array,callback){
    var result = []
    array.map(function(element) {
      result.push(callback(element))
    })
    return result
}

// transform([1,2,3],function(i){
//     console.log(i * 3)
// })
//
// transform([1, 2, 3], function(i) {
//     console.log(0)
// })


// solucion plataforma
function transform(arr, func) {
  var transformed = [];
  for (var i=0; i < arr.length; i++) {
     transformed[i] = func(arr[i]);
  }
  return transformed;
}

// otra forma
function transform(arr, func) {
  return arr.map(func);
}
