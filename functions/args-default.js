"use strict";
(() => {
    const fullName = (firstname, lastName, upper = false) => {
        if (upper) {
            return `${firstname} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstname} ${lastName || '---'}`;
        }
    };
    const name = fullName('Arge', 'Niño', true);
    console.log({ name });
})();
