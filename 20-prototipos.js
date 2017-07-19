// crear una función constructora llamada Square que reciba dos argumentos
// width y height, que se deben convertir en atributos del objeto
// que crea la función. Adicionalmente, Square deberá tener un método
// calculateArea que debe retornar el área del cuadrado (width * height).
//
// Ejemplo:
//
// var square = new Square(50, 60);
//
// square.width; // => 50
// square.height; // => 60
// square.calculateArea(); // => 3000

// mi solucion
function Square(width,height){
    this.width = width
    this.height = height
}

Square.prototype.calculateArea = function(){
    return this.width * this.height
}

var square = new Square(50, 60);

console.log(square.width); // => 50
console.log(square.width); // => 60
console.log(square.calculateArea()); // => 3000
