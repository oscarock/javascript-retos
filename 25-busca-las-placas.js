// definir una función llamada plates que reciba una
// cadena como argumento, y retorne en un arreglo todas las
// placas dentro de la cadena.
//
// Las placas de un vehículo se componen de tres letras mayúsculas,
// seguidas de tres dígitos (p.e. AAA234, o UHJ765).
//
// Ejemplo:
//
// plates("AAA123"); // => ["AAA123"]
// plates("Iba en un AAA123 y después en un BBB987"); //=> ["AAA123", "BBB987"]
// plates("no coincide"); // => []

function plates(string){
    var expression = /[A-Z]{3}[0-9]{3}/.exec(string)
    var palabra = expression
    if (string.search(palabra)!=-1){
        console.log('palabra econtrada ' + palabra)
    }else{
        console.log("palabra Nooo encontrada " + palabra);
    }
}




console.log(plates("AAA123"))
console.log(plates("Iba en un AAA123 y despues en un BBB987"));
console.log(plates("no coincide"));
