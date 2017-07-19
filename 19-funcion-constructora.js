// definir una función constructora llamada User que reciba dos
// parámetros de entrada: name y email, que se deben convertir
// en atributos del objeto que cree la función.
//
// Ejemplo:
//
// var user = new User("Juan", "juan@makeitreal.camp");
//
// user.name => "Juan";
// user.email => "juan@makeitreal.camp";

// mi solucion
function User(name,email){
    this.name = name
    this.email = email
}

// solucion plataforma
var User = function(name, email) {
  this.name = name;
  this.email = email;
};
