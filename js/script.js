'use strict';

function getFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * getFactorial(n - 1);
}
console.log(getFactorial(3));

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    return num * pow(num, degree - 1);
}
console.log(pow(2, 4));

function recursiveSum(a, b) {
    if (b === 0) {
        return a;
    }
    return recursiveSum(a + 1, b - 1);
}
let a = 7;
let b = 7;
console.log(recursiveSum(a, b));