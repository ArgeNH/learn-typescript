(() => {

   const addNumbers = (a: number, b: number): number => a + b;

   const greet = (name: string): string => `Hola ${name}`;

   const saveTheWorld = () => `El mundo esta salvado`;

   //let myFunction: (y: number, z: number) => number;
   //let myFunction: (y: string) => string;
   let myFunction: () => string;

   //myFunction = 10;

   /* myFunction = addNumbers;
   console.log(myFunction(22, -1)); */

   /* myFunction = greet;
   console.log(myFunction('Arge')); */

   myFunction = saveTheWorld;
   console.log(myFunction());

})()