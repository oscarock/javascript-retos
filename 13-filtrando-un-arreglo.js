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
function filter(arr, func) {
  return arr.filter(func);
}

// solucion plataforma
function filter(arr, func) {
  var filtered = [];
  for (var i=0; i < arr.length; i++) {
    if (func(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}
