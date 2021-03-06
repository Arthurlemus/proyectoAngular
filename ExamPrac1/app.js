// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE);
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman);
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
var resultF = function (a, b) { return (a + b) * 2; };
console.log(resultadoDoble(5, 5));
console.log(resultF(15, 15));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    return mensaje;
}
;
console.log(getAvenger("Irving", "volar"));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var rectangulo = /** @class */ (function () {
    function rectangulo() {
    }
    rectangulo.prototype.area = function () {
        var area = this.base * this.altura;
        console.log("el Area es: " + area);
    };
    return rectangulo;
}());
var figura = new rectangulo();
figura.base = 5;
figura.altura = 5;
figura.area();
