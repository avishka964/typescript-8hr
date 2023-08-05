//Functions

//type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[];
};

type userId = stringOrNumber;

//literal types
let myName: 'Dave';

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';


const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

logMsg('Hello!!');
logMsg(add(2, 4));


let subtract = function (c: number, d: number): number {
    return c - d;
};

type mathFunction = (a: number, b: number) => number;
//interface mathFunction {(a:number, b:number): number}

let multiply: mathFunction = function (c, d) {
    return c * d;
};

logMsg(multiply(2, 2));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};

//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
};

logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 4));
logMsg(sumAll(2, 4));
logMsg(sumAll(undefined, 3));


const createError = (error: string) => {
    throw new Error(error);
};

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
};

//use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'String';
    if (isNumber(value)) return 'Number';
    return createError('This should never happen!');
};