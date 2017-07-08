// escribir una función llamada factorial que retorne el factorial de un número, 
// que es la multiplicación de los números (positivos) menores o iguales a ese número.

// Por ejemplo, el factorial de 5 (se escribe 5!) es 120:

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Nota: El factorial de 0 (0!) es 1.

// Ejemplos:

// factorial(0) // => 1
// factorial(1) // => 1
// factorial(3) // => 6
// factorial(5) // => 120

function factorial (num) {
	var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(factorial(5))