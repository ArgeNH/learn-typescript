(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Xmen extends Mutant {
        saveTheWorld() {
            return `Salvo el mundo`;
        }
    }

    class Villan extends Mutant {
        conquerTheWorld() {
            return `Mundo conquistado`;
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villan = new Villan('Magneto', 'Magnus');

    //console.log(wolverine.saveTheWorld());
    //console.log(magneto.conquerTheWorld());

    const printName = (character: Mutant) => {
        console.log(character.realName);
    }

    //printName(wolverine);
})()