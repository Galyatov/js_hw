'use strict';

const operand1 = parseFloat(prompt('Введіть перше число:'));
const operand2 = parseFloat(prompt('Введіть друге число:'));

const sumResult = operand1 + operand2;
console.log(`Результат: ${operand1} + ${operand2} = ${sumResult}`);

const subResult = operand1 - operand2;
console.log(`Результат: ${operand1} - ${operand2} = ${subResult}`);

const mulResult = operand1 * operand2;
console.log(`Результат: ${operand1} * ${operand2} = ${mulResult}`);

const divResult = operand1 / operand2;
console.log(`Результат: ${operand1} / ${operand2} = ${divResult}`);
