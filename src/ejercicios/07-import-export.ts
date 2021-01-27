//Importación Exportación

import { calculaISVD, Producto } from "./06-desestructuracion-funcion"; 


//Importación y Exportación

//Control + . para importar al estar sobre Producto

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
]; 

const [totald, isvd] = calculaISVD( carritoCompras);

console.log( 'Total', totald);
console.log( 'ISVD', isvd); //OJO AL IMPORTAR la función que devuelve los console





