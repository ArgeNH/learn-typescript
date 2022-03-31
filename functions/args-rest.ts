(() => {

   const fullName = (name: string, ...rest: string[]): string => {
      return `${name} ${rest.join(' ')}`
   }

   const superman = fullName('Clark', 'Joseph', 'Kent');

   console.log({ superman })

})()