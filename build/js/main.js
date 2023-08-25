"use strict";
//Index Signatures and Keyof Assertions
// interface TransactionObj {
//     Pizza: number
//     Books: number,
//     Job: number
// }
const todaysTransactions = {
    Pizza: -12,
    Books: -3,
    Job: 34
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (trans) => {
    let total = 0;
    for (const transaction in trans) {
        total += trans[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
