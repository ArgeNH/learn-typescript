(() => {

   const fullName = (firstname: string, lastName?: string, upper: boolean = false): string => {

      if (upper) {
         return `${firstname} ${lastName || '---'}`.toUpperCase();
      }else {
         return `${firstname} ${lastName || '---'}`
      }
   }
   const name = fullName('Arge', 'Niño', true);

   console.log({ name });


})()