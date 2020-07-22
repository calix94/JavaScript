class Persona {

    _conteo=0;

   static get conteo(){
       return Persona._conteo + ' instancias';
   }

   static mensaje(){
       console.log(this.nombre);
       console.log('Hola a todos, soy un metodo estatico');

   }


   nombre = '';
   codigo = '';
   frase = '';
   comida='';

   constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') {

       this.nombre = nombre;
       this.codigo = codigo;
       this.frase = frase;
   }

   set setComidaFavorita(comida){
       this.comida=comida.toUpperCase();

   }

   get getComidaFavorita(){
       return `La comida favorita de ${this.nombre} es ${this.comida}`;

   }

   quiensoy() {
       console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);

   }

   miFrase() {
       this.quiensoy();
       console.log(`${this.codigo} dice: ${this.frase}`)
   }
}

class Heroe extends Persona{
    clan='sin clan';

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan='Los Avengers';


    }

    quiensoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quiensoy();
    }
}

// const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const spiderman=new Heroe();
console.log(spiderman);

spiderman.quiensoy();
