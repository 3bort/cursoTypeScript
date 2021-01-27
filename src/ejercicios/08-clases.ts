// Clases, sirven para crear instancias, que las diferencia de interfaces
// En las clases también podemos crear métodos, pero en las interfaces no
// Las interfaces son "clases tontas"

class Heroe {
    alterEgo: string; //Por defecto son publicas se puede añadir el public o private
    edad: number;
    nombreReal: string;

    constructor(alterEgo: string){ // 
       this.alterEgo = alterEgo;
    }
}

// Otra manera más fácil y menos tediosa ya que hay que hacer todos los this para generar la clase es 

class HeroeF {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        
        ){}
}


const ironman = new HeroeF('Ironman', 45, 'Tony'); // Los parentesis hacen referencia al constructor en esta instancia

console.log(ironman);

//Extender clase

class PersonaNormal{
    constructor (
        public nombre: string, 
        public direccion: string
    )   {}
}


class HeroeExtend extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        
        ){
            super( nombreReal, 'New York, USA' ); // Llama al constructor de "PersonaNormal"
        }
}


const hulk = new HeroeExtend('Hulk', 38, 'Bruce'); // Los parentesis hacen referencia al constructor en esta instancia

console.log(hulk);






