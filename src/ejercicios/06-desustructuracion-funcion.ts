//Desestructuración funciones

export interface Producto {
    desc: string,
    precio: number,
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calculaISV( productos: Producto[]) :number {
    let total = 0;
    productos.forEach((producto) =>{
        total += producto.precio;
    })

    return total * 0.15;
}

const articulos = [ telefono, tablet];

const isv = calculaISV(articulos);

console.log('ISV:', isv)

console.clear();

//Desustructuración


export function calculaISVD( productos: Producto[]) :[number, number] {
    let totald = 0;
    productos.forEach(({precio}) =>{
        totald += precio;
    })

    return [totald, totald * 0.15];
}

const articulosd = [ telefono, tablet];

const [totald, isvd] = calculaISVD(articulosd);

//console.log('ISVD:', isvd)
//console.log('TotalD:', totald)




