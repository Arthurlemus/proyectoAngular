"use strict";
(function () {
    function saludar(nombre) {
        console.table('Welcome ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
    var sumarN = function (a, b) {
        return a + b;
    };
    console.log('La suma es:', sumarN(5, 10));
})();
