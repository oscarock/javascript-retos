// diseñar y escribir una funcion llamada fizzBuzz que reciba como único 
// argumento un número. El método debe cumplir las siguientes condiciones:

// 1-Si el número de entrada es múltiplo de 3 debe retornar el string fizz

// 2-Si el número de entrada es múltiplo de 5 debe retornar el string buzz

// 3-Si el número de entrada es múltiplo tanto de 3 como de 5 debe retornar el string fizzbuzz

// 4-Si el número no cumple ninguna de estas condiciones debe retornar el mismo numero de entrada

// mi solucion
function fizzBuzz(num){
	if(num % 3  == 0 && num % 5 == 0){
		return "fizzbuzz"
	}else if(num % 3 == 0){
		return "fizz"
	}else if(num % 5 == 0){
		return "buzz"
	}else{
		return num
	}
}