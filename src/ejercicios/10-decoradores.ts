// Decoradores de clases sólo disponible en TypeScript
// Ver https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

// Sirven para cambiar las clases cuando son definidas, son clases pero tienen @decoradores

//Una funcion que extiende su clase para tener funcionalidades especiales

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

@classDecorator

class MiSuperClase{
    public miPropiedad: string = 'ABC';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);