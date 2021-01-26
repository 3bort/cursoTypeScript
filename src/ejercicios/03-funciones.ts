
// Funciones Básicas

function sumar(a,b) {
    return a + b;
}

const resultado = sumar('Emilio', ' Bort');

console.log(resultado);


function sumarType(a: number,b: number) { //Si nos pones encima de sumarType, nos dice que devuelve number, hacemos el toString ts sabrá que es string
    return (a + b).toString();
}

const resultadotype = sumarType(10, 20);

console.log(resultadotype);


function sumarTypeReturn(a: number,b: number) : number{ //Podemos obligar a que el return sea un number
    return (a + b);
}

const resultadotypereturn = sumarTypeReturn(10, 20);

console.log(resultadotypereturn);

//Array function

const arrayFunction = (a: number,b:number):number => {
    return a + b;   
}

//Otro ejemplo

function multiplicar(numero: number, otronumero?: number, base: number = 2): number { //Primero obligatorios luego opcionales, se puede poner valor por defecto
    return numero * base;   
}

const resultadoMultiplicar = multiplicar(5,0,10); //El orden es importante si el opcional no lo usamos meter valor aquí

console.log(resultadoMultiplicar);

console.clear();




// Funciones con objetos como argumentos


interface PersonajeLOR{
    nombre: string,
    pv: number,
    mostrarHP: () => void
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Gandalf',
    pv: 50,
    mostrarHP() {
        console.log(`El personaje ${this.nombre}, tiene ${this.pv} puntos de vida`)
    }
}

curar( nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();