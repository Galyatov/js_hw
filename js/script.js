'use strict'

function averageNumericElements(array) {
    let numericElements = array.filter(function(element) {
        return typeof element === 'number';
    });
    if (numericElements.length > 0) {
        let sum = numericElements.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        return sum / numericElements.length;
    } else {
        return 0;
    }
}
const array = [2, 'a', 7, 4.5, 'hello', 17];
console.log("Середнє арифметичне числових елементів:", averageNumericElements(array));


function doMath(x, znak, y) {
    switch(znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return y !== 0 ? x / y : 'Ошибка ділення на нуль';
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);
        default:
            return 'Неправильная операція';
    }
}
const x = parseFloat(prompt("Введіть перше число:"));
const znak = prompt("Введіть знак операції (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Введіть друге число:"));
console.log("Результат:", doMath(x, znak, y));


function fill2DArray() {
    const rows = parseInt(prompt("Введіть кількість рядків:"));
    const cols = parseInt(prompt("Введіть кількість стовпців:"));
    const array = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            let value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
            row.push(value);
        }
        array.push(row);
    }
    return array;
}
const twoDArray = fill2DArray();
console.log("Двомірний масив:", twoDArray);


function removeCharacters(string, charsToRemove) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (!charsToRemove.includes(string[i])) {
            result += string[i];
        }
    }
    return result;
}
const string = prompt("Введіть рядок:");
const charsToRemove = prompt("Введіть символи для видалення :").split('');
console.log("Результат:", removeCharacters(string, charsToRemove));