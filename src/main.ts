//Basic types

let myName: string = 'David'
let isLoading: boolean;
let album: any;
let age: string | number; //union type
let re: RegExp = /\w+/g

myName = 'John'
isLoading = true
album = 1234

const sum = (a: number,b: string) => {
    return a + b
}

console.log(sum(3,'2'))
