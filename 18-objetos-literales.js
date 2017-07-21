// crear y manipular objetos literales en JavaScript. Lo vamos a hacer con
// la metodología de evaluar y solucionar el error.
//
// Instrucciones
//
// Crea la variable pepito que debe ser igual a un objeto literal
// Esta variable debe estar declarada antes de la variable maria.
//
// Oprime Evaluar solución para mostrar el primer mensaje de error.
//
// Soluciona el problema que te indica el mensaje.
//
// Repite el paso 2 y 3 hasta que finalices el reto.

// mi solucion
var pepito = {
  nombre: "Pepito",
}

var maria = {
  nombre: "Terah",
  edad: 32,
  altura: 1.70,
  peso: 60,
  colorPelo: "cafe",
  esposo: pepito,
  hijos: {
    german:{
      nombre: "German"
    }
  },
  bmi: function(){
    var quadrado = (this.altura * this.altura);
    var calculo = (this.peso/quadrado);
    return calculo
  }
}


// solucion plataforma
var pepito = {
  nombre: 'Pepito'
};

var maria = {
  nombre: "Terah",
  edad: 32,
  altura: 1.70,
  peso: 60,
  colorPelo: "cafe",
  esposo: pepito,
  hijos: {
    german: {
      nombre: "German"
    }
  },
  bmi: function() {
    return this.peso/Math.pow(this.altura,2)
  }
}
