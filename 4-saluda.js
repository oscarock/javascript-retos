// crear una función llamada saluda que reciba 
// una cadena y retorne el texto "Hola [nombre]" donde [nombre] es el valor 
// de la cadena que se recibió por parámetro.

// Ejemplos:

// saluda("juan"); // => "Hola juan"
// saluda("Yu-kai Chou") // => "Hola Yu-kai Chou"
// saluda("") // => "Hola 

// mi solucion
function saluda(string){
	return "Hola " + string
}

saluda("juan"); // => "Hola juan"
saluda("Yu-kai Chou") // => "Hola Yu-kai Chou"
saluda("") // => "Hola "