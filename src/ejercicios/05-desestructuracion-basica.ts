// Desestructuración de Objetos


interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,
}

interface Detalles{
    autor: string,
    anyo: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'La promesa',
    detalles: {
        autor: 'Melendi',
        anyo: 2014
    }
}

console.log('El volumen actual es: ', reproductor.volumen);
console.log('El actual actual es: ', reproductor.segundo);
console.log('La canción actual es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);


// Desustructuración Extraer las propiedades de un objeto para así crear variables

const { volumen : vol, segundo, cancion, detalles : {autor} } = reproductor; //Con Ctrl + Espacio se ven las propiedades de detalles
// const {autor} = detalles // Es preferible así

console.log('El volumen actual es: ', vol);
console.log('El actual actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor es: ', autor);

console.clear();


// Desustructuración de Arrays


const dbz: string[] = ['Goku','Vegeta', 'Trunks']; // En la desestructuración de arrays importa el orden


console.log('Personaje 1: ', dbz[0] );
console.log('Personaje 2: ', dbz[1] );
console.log('Personaje 3: ', dbz[2] );

// Desestructurado

const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1: ', p1 );
console.log('Personaje 2: ', p2 );
console.log('Personaje 3: ', p3 );

// Si solo queremos el 3 seria dejar const [ , , p3 ] = dbz;
console.log('Personaje 3: ', p3 );






