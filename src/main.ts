//Index Signatures and Keyof Assertions


interface TransactionObj {
    [index: string]: number
}

// interface TransactionObj {
//     Pizza: number
//     Books: number,
//     Job: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -12,
    Books: -3,
    Job: 34
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])


let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (trans: TransactionObj) : number => {
    let total = 0
    for (const transaction in trans) {
        total += trans[transaction]
    }

    return total
}


console.log(todaysNet(todaysTransactions))