(function () {
    //     function saludar(nombre: string) {
    //     console.table('Welcome ' + nombre); // Hola Logan
    // }
    // const wolverine = {
    //     nombre: 'Logan'
    // };
    // saludar(wolverine.nombre);
    // const sumarN = (a: number, b: number)=>{
    //     return a + b;
    // }
    // console.log('La suma es:',sumarN(5,10));
    var hulk = {
        nombre: 'Brus Banner',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.nombre + " Se a Convertido");
            }, 1000);
        }
    };
    hulk.smash();
})();
