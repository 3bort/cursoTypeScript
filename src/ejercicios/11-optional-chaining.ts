//Encadenamiento opcional

interface Pasajero {
    nombre: string,
    hijos?: string[], //No todos los pasajeros tienen hijos de ahí la opcional con ?
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Maria', 'Izan']
}

function imprimeHijos (pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0; //Si es undefined hijos devuelve 0
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);







