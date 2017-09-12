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
    var re = /\[([^\]]*)\]/g, 
        match = ""
    while(match = re.exec(str)) {
        str = str.replace(match[0], obj[match[1]])
        // re.lastIndex = 0;
    }
    return str;
}

//solucion plataforma
function template(str, data) {
  var regexp = /\[(.*?)\]/g;
  var vars = [];

  // obtenemos las variables del texto
  var matches = regexp.exec(str);
  while (matches) {
    vars.push(matches[1]);
    matches = regexp.exec(str);
  }

  // reemplazamos las variables con los valores que vienen en el objeto
  for (var i=0; i < vars.length; i++) {
    str = str.replace("[" + vars[i] + "]", data[vars[i]]);
  }

  return str;
}

//solucion plataforma
var template = function(str, obj){
  var arr = [];
  var regex = /\[(.*?)\]/g;
  str.replace(regex, function(string, match){
    str = str.replace(/\[(.*?)\]/, obj[match])
  });
  return str;
};

console.log(template("Hola [nombre]", { nombre: "German" })); // => "Hola German");
console.log(template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }));
console.log(template("Hola mundo", {}))
