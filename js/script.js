'use strict';

function createSumFunction() {
    let total = 0;

    return function sum(value) {
        total += value;
        return total;
    };
}
const sum = createSumFunction();

console.log(sum(3));
console.log(sum(7));
console.log(sum(20));