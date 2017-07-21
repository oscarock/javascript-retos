// definir una función llamada template que reciba dos argumentos:
// una cadena y un objeto. La función debe retornar una nueva
// cadena reemplazando las variables de la cadena de entrada
// con los valores definidos en el objeto.
//
// Las variables vienen encerradas en corchetes [] dentro del texto. Veamos
// algunos ejemplos para que te des una idea:
//
// template("Hola [nombre]", { nombre: "German" }); // => "Hola German"
// template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }); // => "Hola German, tu saldo es 12000"
// template("Hola mundo", {}) // => "Hola mundo"
// Si la variable no viene definida en el objeto, aparece el texto "undefined"
// (que es lo que devuelve JavaScript por defecto cuando no se encuentra una llave en un objeto):
//
// template("Hola [nombre]", {}); // => "Hola undefined"
// Si sobran variables en el objeto simplemente se ignoran:
//
// template("Hola mundo", { nombre: "German" }); // => "Hola mundo"

// mi solucion
function template(str,obj){
    // console.log(str)
    var expresion = str.match(/\[([^\]]+)]/g);
    // console.log(expresion);
    var a = expresion.toString().split('[')
    var b = a.toString().split(']')
    var c = b.toString().split(',')
    console.log(c);
    // c.forEach(function(e){
    //     console.log("Hola German" + e);
    // })
    // expresion.forEach(function(e){
    //     console.log(e);
    //     var a = e.split(']')
    //
    //     console.log(typeof(a));
    // })
}

console.log(template("Hola [nombre]", { nombre: "German" }));
// console.log(template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }));
