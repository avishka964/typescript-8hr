"use strict";
//Array & Objects
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 9034];
let mixedData = ['toyota', 1998, true];
stringArr[0] = 'Mike';
stringArr.push('Monday');
guitars[0] = 3478;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Dave', 34, true];
let mixed = ['Bob', 34, false];
myTuple[1] = 45;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'Bob';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'OU812']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
