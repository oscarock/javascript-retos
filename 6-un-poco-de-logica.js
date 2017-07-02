// crear una función llamada isAlive que reciba dos argumentos llamados playerName y points
// isAlive debe retornar verdadero si playerName es igual a "ikk" y points es mayor a 30, 
// o si playerName es igual a "gut" y points es mayor a 10. De lo contrario, debe retornar falso.

// Ejemplos:

// isAlive("ikk", 50) //=> true
// isAlive("gut", 50) //=> true
// isAlive("ikk", 20) //=> false
// isAlive("gut", 5) //=> false
// isAlive("trek", 50) //=> false

// mi solucion
function isAlive(playerName,points){
	if(playerName == "ikk" && points > 30 || playerName == "gut" && points > 10){
		return true
	}else{
		return false
	}
}
