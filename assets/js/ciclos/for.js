const heroes=['Batman','Superman','Mujer Maravilla','Aquaman'];


console.warn('for tradicional');
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}


console.warn('for in');

for(let i in heroes){
    console.log(heroes[i]);
}


console.warn('for on');

for(let heroe of heroes){
    console.log(heroe);
}