"use strict";
(() => {
    const fullName = (name, ...rest) => {
        return `${name} ${rest.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
