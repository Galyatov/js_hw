'use strict'

const numOrStr = prompt('input number or string');
console.log(numOrStr);

let inputType;
if (numOrStr === null) {
    inputType = 'cancelled';
} else if (numOrStr.trim() === '') {
    inputType = 'empty';
} else if (isNaN(+numOrStr)) {
    inputType = 'NaN';
} else {
    inputType = 'number';
}

switch (inputType) {
    case 'cancelled':
        console.log('ви скасували');
        break;
    case 'empty':
        console.log('Empty String');
        break;
    case 'NaN':
        console.log('number is Ba_NaN');
        break;
    case 'number':
        console.log('OK!');
        break;
    default:
        console.log('Невідомий тип введення');
}