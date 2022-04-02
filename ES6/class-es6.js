(() => {
   
   class Avenger {

      constructor(name = 'No name', power = 0) {
         this.name = name;
         this.power = power;
      }
   }

   class FlyingAvenger extends Avenger {

      constructor(name, power, flying = true) {
         super(name, power);
         this.flying = flying;
      }
   }

   const hulk = new Avenger('Hulk', 9001);

   const falcon = new FlyingAvenger('Falcon', 100, true);

   console.log("🚀 ~ file: class-es6.js ~ line 24 ~ falcon", falcon)

   console.log(hulk);
})();
