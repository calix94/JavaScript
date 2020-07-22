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


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(ironman);

// spiderman.miFrase();
spiderman.setComidaFavorita='El pie de cereza de la tia May';

Persona._conteo=2;
console.log('Conteo statico ',Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();


Persona.propiedadExterna='Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);