//Generics

const echo  = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj(['pig', 'cat']))
console.log(isObj({game: 'football'}))