let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Paul', 9034]

let mixedData = ['toyota', 1998, true]

stringArr[0] = 'Mike'
stringArr.push('Monday')

guitars[0] = 3478
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

//Tuple
let myTuple:[string, number, boolean] = ['Dave', 34 , true]

let mixed = ['Bob', 34, false]

myTuple[1] = 45

//Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'Bob'

//type or interface
type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 'OU812']
}

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp))