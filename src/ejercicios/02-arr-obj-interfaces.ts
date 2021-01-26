//Array

let habilidades: string[] = ['Bash', 'Counter', 'Healing']; //Poner el tipo, pueden ser varios

//habilidades.push()

//Si miras en source las interfaces no aparecen

interface Personaje{
    nombre: string,
    hp: number,
    habilidades : string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Emilio',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);