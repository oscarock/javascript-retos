// escribir un método llamado order que reciba dos argumentos, el primero será un
// arreglo de números y el segundo un booleano que llamaremos reverse
// que es opcional.
// Si el valor de reverse es verdadero la función debe retornar el arreglo de
// mayor a menor, de lo contrario lo deberá organizar de menor a mayor.
//
// Ejemplo
//
// order([1, 2, 3], true) //=> [3, 2, 1]
// order([5, 2, 1, 3, 4]) //=> [1, 2, 3, 4, 5]

// mi solucion
function order(array,reverse = ""){
    if(reverse == true){
        return array.reverse()
    }else{
        return array.sort()
    }
}
