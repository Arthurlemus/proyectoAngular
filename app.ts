


// nombre = "irving";
// console.log(hoy);
// console.log(nombre);

// let nombre:string = "irving";
// let apellido:string = "Lemus";
// let edad:number = 32;

// // let texto = "Hola," + nombre + " " +apellido + "("+edad+")";
// let texto = `Hola, ${nombre} ${apellido} (${edad})`;

// console.log(texto);

// function activar(nombre:string,objeto:string="espada",poder?:string){
    //     // contenido de funcion
    // }
    
 // ──────────────────────────────────────────────────────────────────────────
 // Tipos de Datos 
 // ──────────────────────────────────────────────────────────────────────────
 // let nombre:string;
 // let edad:number;
 // let Booleano:boolean;
 // let hoy:Date = new Date();
 
 // let cualquiera:any;
  
 // let spiderman = {
 //     nombre:"Peter",
 //     edad: 20
 // };
 
// ──────────────────────────────────────────────────────────────────────────
// Funciones de Flecha
// ──────────────────────────────────────────────────────────────────────────

// let mifuncion = function(a:number,b:number){
//     return a + b;
// }

// let mifuncionFlecha = (a:number,b:number)=> a + b;

// let objeto ={
//     nombre:"hulk",
//     accion(){
//         console.log("Muereee"+ this.nombre);
//     }
// };

// console.log(mifuncion(10,20));
// console.log(mifuncionFlecha(30,10));
// objeto.accion();

// ──────────────────────────────────────────────────────────────────────────
// Destructuracion de Objetos
// ──────────────────────────────────────────────────────────────────────────

// let avenger = {
//     nombre: "Steve",
//     clave:"Capitan America",
//     poder:"Suero"
// };

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// let {nombre:nreal,clave:hero,poder:power} = avenger;

// console.log(nreal , clave,poder);r

// ──────────────────────────────────────────────────────────────────────────
// Promesas
// ──────────────────────────────────────────────────────────────────────────
// let prom1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Promesa Terminada");
//         resolve();
//     },1500);
    
// });


// prom1.then(function(){
//     console.log("Todo Sale Bien");
// },
// function(){
//     console.error("Algo Salio mal");
// });

// ──────────────────────────────────────────────────────────────────────────
// Interfaces Typescript
// ──────────────────────────────────────────────────────────────────────────
// interface Xmen{
//     nombreXmen:string,
//     nombreReal:string,
//     poder:string
// }


// function enviarMision(xmen:Xmen){
//     console.log("Enviando a: " + xmen.nombreXmen);
// }

// function enviarCuartel(xmen:Xmen){
//     console.log("Enviando al Cuartel: " + xmen.nombreXmen);
// }

// let wolverine:Xmen = {
//     nombreXmen:"Wolverine",
//     nombreReal:"Logan",
//     poder:"Regeneracion"
// }

// enviarMision(wolverine);
// enviarCuartel(wolverine);

// ──────────────────────────────────────────────────────────────────────────
// Clases Typescript
// ──────────────────────────────────────────────────────────────────────────
// class Avanger {
//     nombre:string;
//     equipo:string;
//     nombreReal:string;
    
//     puedePelear:boolean;
//     peleasGanadas:number;
    
//     constructor(nombre:string,equipo:string,nombreReal:string){
//         this.nombre = nombre;
//         this.equipo = equipo;
//         this.nombreReal = nombreReal;
//     }
// }

// let antman:Avanger = new Avanger("ArthurLemu","Iroman","Irving Lemus");

// console.log(antman);

// ──────────────────────────────────────────────────────────────────────────
// Decoradores de Clases
// ──────────────────────────────────────────────────────────────────────────
function consola(constructor:Function){
    console.log(constructor);
}


@consola
class Villano{
    constructor(public nombre:string){
        //
    }
}

let prueba = new Villano("pro");
console.log(prueba);