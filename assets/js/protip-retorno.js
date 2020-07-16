// function crearPersona(nombre,apellido){
//     return {nombre,apellido}    
// }

//se especifican los parentesis en un arrow function cuando se quiere especificar que se retornara un objeto;
const crearPersona=(nombre,apellido)=> ({nombre,apellido})



const persona=crearPersona('Maynor','Calix');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2=(edad,...args)=>
{
    // console.log(args)
    return args;
};

//imprimir como un arreglo
const[casado,vivo,nombre,saludo]=imprimeArgumentos2 (10,true,false,'maynor','hola');
console.log({casado,vivo,nombre,saludo});




// imprimeArgumentos(10,true,false,'maynor','hola');

// const argumentos=imprimeArgumentos2 (10,true,false,'maynor','hola');
// console.log(argumentos);

//se especifican los parentesis en un arrow function cuando se quiere especificar que se retornara un objeto;
const {apellido:nuevoApellido}= crearPersona('Maynor','Calix');

console.log(nuevoApellido);

//destructuracion de argumentos

const maynor={
    nombre:'Maynor',
    codeName:'May',
    vivo:true,
   // edad:26,
    trajes:['Mark 1', 'Mark V' , 'Hulkbuster']};


    // const imprimePropiedades= ( personaje)=>{
    //     console.log('nombre',personaje.nombre);
    //     console.log('codeName',personaje.codeName);
    //     console.log('vivo',personaje.vivo);
    //     console.log('edad',personaje.edad);
    //     console.log('trajes',personaje.trajes);
    // }


    const imprimePropiedades=({nombre,codeName,vivo,edad=15,trajes})=>{

       

        console.log({nombre});
        console.log({codeName});
        console.log({vivo});
        console.log({edad});
        console.log({trajes});

    }


    imprimePropiedades(maynor);