function saludar( nombre){
    // console.log(arguments);
    // console.log('Hola '+nombre);
    return [1,2];

}

const saludar2=function(nombre){
    console.log('Hola ' +nombre);
}


const saludarFlecha=()=>{
    console.log('Hola flecha');

}


const saludarFlecha2=(nombre) =>{
    console.log('Saludar flecha 2' +nombre);
}

const retornoDeSaludar=saludar('Maynor',40,true,'Honduras');
// console.log(retornoDeSaludar[0],retornoDeSaludar[1]); 


// saludarFlecha();
// saludarFlecha2('Maynor');

function sumar(a,b){
    return a+b;
}

const sumarFlecha=(a,b)=> a+b;

function getAleatorio(){
    return Math.random();
}


//en funcion de flecha que no tenga llave

const getAleatorioArrow=()=>Math.random();

// console.log(sumar(1,2)); 
console.log(getAleatorioArrow()); 