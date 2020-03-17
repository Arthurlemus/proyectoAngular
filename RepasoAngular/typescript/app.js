"use strict";
(function () {
    var enviarMision = function (xmen) {
        console.log("Enviando a " + xmen.nombre + " a la Mision");
    };
    var wolverine = {
        nombre: 'Logan',
        edad: 30
    };
    enviarMision(wolverine);
})();
