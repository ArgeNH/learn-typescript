(() => {

   let avenger: any = 123;
   let exists;
   let power;

   avenger = 'Dr Strange';
   //console.log(avenger.charAt(0));
   console.log((avenger as string).charAt(0)); //casteo

   avenger = 150.246786;
   console.log(<number>avenger.toFixed(2)); //casteo

   console.log(exists);
   console.log(power);

})()