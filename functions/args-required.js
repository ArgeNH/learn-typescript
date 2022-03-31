"use strict";
(() => {
    const fullName = (firstname, lastName) => {
        return `${firstname} ${lastName}`;
    };
    const name = fullName('Arge', 'Niño');
    console.log({ name });
})();
