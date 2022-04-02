(() => {

   type Hero = {
      nick: string,
      ironman: string,
      vision: string,
      active: boolean,
      power: number
   }

   const avengers: Hero = {
      nick: 'Samuel L. Jackson',
      ironman: 'Robert Downey Jr.',
      vision: 'Paul Bettany',
      active: true,
      power: 1500.4562
   }

   /* const { power, vision } = avengers;
   console.log(power.toFixed(2), vision.toUpperCase()); */

   const showAvenger = ({ ironman, ...rest }: Hero): void => {
      console.log(ironman, rest);
   }

   //showAvenger(avengers);

   const avengerArr: [string, boolean, number] = ['Captain America', true, 350];

   const [ name, active, power] = avengerArr;
   //console.log({ name, active, power })

})()