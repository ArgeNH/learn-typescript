"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 35,
        powers: ['Super Fuerza'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} - ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Arge',
        age: 22,
        address: {
            id: 90,
            zip: '127597',
            city: 'Nobsa'
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Juanita',
        age: 18,
        address: {
            id: 14,
            zip: '127597',
            city: 'Nobsa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map