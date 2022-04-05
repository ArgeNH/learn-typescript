// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
    encender: boolean,
    velocidadMaxima: number,
    acelerar(): void
}

const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}

const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villan {
    reir?: boolean,
    comer?: boolean,
    llorar?: boolean
}

const guason: Villan = {
    reir: true,
    comer: true,
    llorar: false
}

const reir = (guason: Villan): void => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}


// Cree una interfaz para la siguiente funcion

interface City {
    (ciudadanos: string[]): number;
}

const ciudadGotica: City = (ciudadanos: string[]): number => {
    return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person {
    name: string,
    age: number,
    sex: boolean,
    civilStatus: boolean,
    printBio(): void
}

class Persona implements Person {
    constructor(
        public name: string,
        public age: number,
        public sex: boolean,
        public civilStatus: boolean
    ) { }

    printBio(): void {
        console.log(`
            ${this.name}
            ${this.age}
            ${this.sex}
            ${this.civilStatus}
        `);
    }
}