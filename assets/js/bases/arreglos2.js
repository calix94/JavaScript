let juegos=['Zelda','Mario','Metroid','fIFA']

console.log('Largo: ', juegos.length);

let primero=juegos[0];
let ultimo=juegos[juegos.length-1];

console.log(primero,ultimo);

juegos.forEach( (elemento,indice,arr )=>{
    console.log({elemento,indice,arr});
});



let nuevoaLongitud=juegos.push('F-Zero');

console.log(nuevoaLongitud,juegos);

nuevoaLongitud=juegos.unshift('Fire Emblem');

console.log(nuevoaLongitud,juegos);


let juegoBorrado=juegos.pop();

console.log({juegoBorrado,juegos});

let pos=1;

console.log(juegos);
let juegosBorrados=juegos.splice(pos,2);

console.log({juegosBorrados,juegos});

let metroidIndex=juegos.indexOf('Metroid');//Case Sensitive

console.log({metroidIndex});

