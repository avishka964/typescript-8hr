"use strict";
//Functions
//literal types
let myName;
let userName;
userName = 'Amy';
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!!');
logMsg(add(2, 4));
let subtract = function (c, d) {
    return c - d;
};
//interface mathFunction {(a:number, b:number): number}
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 4));
logMsg(sumAll(2, 4));
logMsg(sumAll(undefined, 3));
const createError = (error) => {
    throw new Error(error);
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'String';
    if (isNumber(value))
        return 'Number';
    return createError('This should never happen!');
};
