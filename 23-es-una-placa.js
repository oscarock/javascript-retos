// escribir una función llamada isPlate que reciba una cadena de texto (string)
// como argumento y retorne true si la cadena es una placa de un
// vehículo o false de lo contrario.
//
// Las placas de un vehículo se componen de tres letras mayúsculas,
// seguidas de tres dígitos (p.e. AAA234, o UHJ765).
//
// Ejemplos
//
// isPlate?("") //=> false
// isPlate?("MVV387") //=> true
// isPlate?("mvv387") //=> false

function isPlate(string){
    var expression = /[A-Z]{3}[0-9]{3}/.exec(string)

    if(expression != null){
        return true
    }else{
        return false
    }
}
