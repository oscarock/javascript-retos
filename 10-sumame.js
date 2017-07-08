// crear una función llamada sumame que recibe un arreglo de números 
// y debe retornar la suma de esos números.

// Ejemplos

// sumame([1,2,3,4]) => 10
// sumame([3]) => 3
// sumame([]) => 0

//mi solucion
function sumame(array){
	var sum = 0
	array.forEach(function(elem){
		sum = sum + elem
	})
	return sum
}

//solucion plataforma 
function sumame(arr) {
  var suma = 0;
  for (var i=0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

//otra forma mas funcional
function sumame(arr) {
  return arr.reduce(function(memo, i) {
    return memo + i;
  }, 0);
}