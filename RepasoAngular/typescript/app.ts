(function(){

    
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

const hulk = {
    nombre:'Brus Banner',
    smash() {
        setTimeout(() =>{
            console.log(`${this.nombre} Se a Convertido`);
        }, 1000);
    }
}

hulk.smash();



})();