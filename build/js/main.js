"use strict";
//Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj(['pig', 'cat']));
console.log(isObj({ game: 'football' }));
