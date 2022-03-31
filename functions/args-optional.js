"use strict";
(() => {
    const fullName = (firstname, lastName) => {
        return `${firstname} ${lastName || '---'}`;
    };
    const name = fullName('Arge');
    console.log({ name });
})();
