(() => {

   type Hero = {
      name: string,
      age?: number,
      powers: string[],
      getName?: () => string
   }

   let flash: Hero = {
      name: 'Barry Allen',
      age: 24,
      powers: ['Super Velocidad', 'Viajar en el tiempo'],
   }

   let superman: Hero = {
      name: 'Clark Kent',
      age: 35,
      powers: ['Super VFuerza'],
      getName(): string {
         return this.name;
      },
   }


})()