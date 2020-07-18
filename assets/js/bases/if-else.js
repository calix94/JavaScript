let a=5;

if(a>10){

}



//
const hoy=new Date();

let dia=hoy.getDate(); //0 domingo, 1 lunes,  2martes

console.log({dia});

// sin usar if else o switch.
dia=3 ;
//dia de la semana

const diasLetras={
0:'domingo',
1:'lunes',
2:'martes',
3:'miercoles',
4:'jueves',
5:'viernes',
6:'sabado',
}

console.log('Hoy es ', diasLetras[dia]|| 'Dia no es valido');