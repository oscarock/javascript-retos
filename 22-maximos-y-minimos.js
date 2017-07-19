// definir dos funciones, una llamada maximo y otra minimo, que reciben un
// número variable de argumentos (números) y retornan el
// máximo y el mínimo respectivamente.
//
// Ejemplo:
//
// maximo(5, 10, 20, 50, 32) #=> 50
//
// minimo(3, 44, 2, 8) #=> 2

// mi solucion
function maximo(...num){
    return Math.max(...num)
}

function minimo(...num){
    return Math.min(...num)
}

// solucion plataforma
function maximo() {
  var args = Array.prototype.slice.call(arguments);
  args = args.sort(function(a, b) {
    return b - a;
  });
  return args[0];
}

function minimo() {
  var args = Array.prototype.slice.call(arguments);
  args = args.sort(function(a, b) {
    return a - b;
  });
  return args[0];
}
