"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
