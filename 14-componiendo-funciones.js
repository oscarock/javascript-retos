// definir una función llamada compose que recibe dos funciones como argumentos.
// La función compose debe invocar la primera función, pasarle el resultado de
// la primera función a la segunda función y retornar el resultado de
// la segunda función.
//
// Ejemplos:
//
// var greet = function() {return "Bienvenidos"; };
// var yell = function(str) { return str.toUpperCase() + "!"; };
// compose(greet, yell); // => BIENVENIDOS!
//
// var generate = function() { return 2; };
// var square = function(x) { return x * x; }
// compose(generate, square); // => 4

// mi solucion
function compose(callback1,callback2){
    console.log(callback2(callback1()))
}

// otra solucion
function compose(func1, func2) {
  var result = func1(); // invocamos la primera función
  return func2(result); // invocamos la segunda y pasándole el resultado de la primera
}
