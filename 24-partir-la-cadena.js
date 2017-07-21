// definir una función split que reciba una cadena
// como argumento y retorne un arreglo con la cadena dividida utilizando
// los caracteres +, - o * como separadores.
//
// Ejemplos:
//
// split("Hola+Mundo"); // => ["Hola", "Mundo"]
// split("partir-la-cadena"); // => ["partir", "la", "cadena"]
// split("este-es+otro*ejemplo"); // => ["este", "es", "otro", "ejemplo"]
// split(''); // => [""]

// mi solucion
function split(string){
    var result = string.split(/[+,*,-]/)
    return result
}

// solucion plataforma
function split(str) {
    return str.split(/[\+\-\*]/);
}
