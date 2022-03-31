(() => {

   const fullName = (firstname: string, lastName: string): string => {
      return `${firstname} ${lastName}`
   }

   const name = fullName('Arge', 'Niño');

   console.log({ name });


})()