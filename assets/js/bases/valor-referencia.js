let a = 10;
let b = a;

a = 30;
console.log({ a, b });


let maynor = { nombre:'Maynor' ,apellido:'calix'}
let angie = {...maynor};


console.log({maynor,angie});
 angie.nombre='Angie';


console.log({maynor,angie});

const cambiaNombre=({...persona})=>{
    persona.nombre='Tony';
    return persona;
}

let peter={nombre:'Peter'};
let tony=cambiaNombre(peter);

console.log({peter,tony});

//Arreglos
const frutas=['Manzana','Pera','Pina'];



// const otrasFrutas=[...frutas];
console.time('slice');
const otrasFrutas=frutas.slice();
console.timeEnd('slice');



console.time('spread');
const otrasFrutas2=[...frutas];
console.timeEnd('spread');




otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});
