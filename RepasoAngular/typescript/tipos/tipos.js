"use strict";
(function () {
    function saludar(nombre) {
        console.table('Welcome ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
})();
