// definir una función counter que retorne otra función. Cada vez que se
// llame esa función que retorne counter, se deberá incrementar
// un contador y devolver el resultado.
//
// Ejemplos:
//
// var count = counter();
// count(); // => 1
// count(); // => 2
// count(); // => 3
//
// var clicky = counter();
// clicky(); // => 1
// clicky(); // => 2

// mi solucion
function counter(){
    var cont = 1
    return function(){
        return cont++
    };
}

// solucion plataforma
function counter() {
  var count = 0;

  return function() {
    return ++count;
  };
}
