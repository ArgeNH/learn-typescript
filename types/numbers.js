"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123A');
    console.log({ avengers });
})();
