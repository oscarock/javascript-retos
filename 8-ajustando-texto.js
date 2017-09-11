// escribir una función llamada adjustText que ajuste el texto de una cadena a 
// una longitud determinada.La función debe recibir dos argumentos: una cadena y
// un número que determina la longitud a la que se debe ajustar la cadena. 
// Si la longitud de la cadena es mayor al valor del segundo parámetro, 
// se debe cortar. De lo contrario, se debe completar con espacios.

// Ejemplos:

// adjustText("", 3) //=> "   "
// adjustText("hola", 2) //=> "ho"
// adjustText("Hola", 0) //=> ""
// adjustText("Hola", 10) //=> "Hola      "

//mi solucion
function adjustText(str,num){
	if (str.length > num){
		return str.slice(0,num)
	}else{
		if(str.length >= num) return str;
			var delta = num - str.length;
		 	var res = str;
		 	for(var i = 0 ; i < delta ; i++) {
		   res = res + " ";
			}
		return res;
	}
}

//solucion plataforma
function adjustText(str, length) {
  if (str.length > length) {
     str = str.substring(0, length);
  } else {
    while (str.length < length) {
      str += " ";
    }
  }

  return str;
}

function adjustText(str, length) {
  while (str.length < length) {
    str += " "; 
  }

  if (str.length > length) {
     str = str.substring(0, length);
  }

  return str;
}

console.log(adjustText("", 3))
console.log(adjustText("hola", 2))

