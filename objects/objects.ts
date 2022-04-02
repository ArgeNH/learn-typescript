(() => {

   let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
      name: 'Barry Allen',
      age: 24,
      powers: ['Super Velocidad', 'Viajar en el tiempo'],
   }

   let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
      name: 'Clark Kent',
      age: 35,
      powers: ['Super VFuerza']
   }

   /*  flash = {
      name: 'Other name',
      age: 35,
      powers: ['Super Fuerza'],
      getName() {
         return this.name;
      }
   } */

   //console.log(flash.getName());

   console.log(flash);


})()