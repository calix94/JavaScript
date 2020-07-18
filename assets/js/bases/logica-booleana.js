
const regresaTrue=()=>{
    console.log('Regresa true');
    return true;
}


const regresaFalse=()=>{
    console.log('Regresa false');
    return false;
}


console.warn('Not o la negacion');
console.log(true);



/////////////rotip

console.warn('Asignaciones');


const soyUndefined=undefined;
const soyNull=null;
const soyFalso=false;

const a1=true && 'Hola Mundo';
const a2='Hola' && 'Mundo'&& soyFalso;
const a3=soyFalso || 'Ya no soy falso';
const a4=soyFalso|| soyUndefined||soyNull||'Ya no soy falso de nuevo'; 


console.log({a1,a2,a3} );