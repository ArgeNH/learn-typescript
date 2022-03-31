(() => {

   const hero: [string, number, boolean] = ['Dr Strange', 100, true];

   hero[0] = 'Hulk';
   hero[1] = 200;
   hero[2] = false;

   console.log(hero);

})()