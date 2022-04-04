(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            //console.log('Contructor Avenger');
        }

        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }



    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            //console.log('Contructor Xmen llamado');
        }

        get fullName(): string {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe contener por lo menos 3 letras');
            }
            this.name = name;
        }

        getFullNameInXmen(): void {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', false);

    //console.log(wolverine.fullName);
    //wolverine.getFullNameInXmen();

    //wolverine.fullName = 'Arge'

})()