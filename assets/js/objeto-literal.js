const personaje={
    nombre:'Maynor',
    codeName:'May',
    vivo:true,
    edad:26,
    coords:{
        lat:34.034,
        long:-118.70
    },
    trajes:['Mark 1', 'Mark V' , 'Hulkbuster'],
    direccion:{
        zip:'3456,45454',
        ubicacion:'San Pedro Sula, Cortes'
    },
    'ultima-pelicula':'Infinity War'
};

console.log(personaje);
console.log('Nombre: ',personaje.nombre);
console.log('Edad: ',personaje.edad);
console.log('coordenadas: ',personaje.coords);
console.log('Latitud: ',personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length-1]);

const x='vivo';

console.log('Vivo: ',personaje[x]);

console.log('Ultima pelicula: ', personaje['ultima-pelicula'])

//Mas Detalles

delete personaje.edad;
console.log(personaje);

personaje.casado=false;

const entriesPares=Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

Object.freeze(personaje);

personaje.dinero=10000;
console.log(personaje);


const propiedades=Object.getOwnPropertyNames(personaje);

console.log({propiedades});

const valores=Object.values(personaje);

console.log({propiedades,valores});