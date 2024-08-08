'use strict';

const name = prompt('Enter user name:');
const age = prompt('Enter user age:');
const likesProgramming = confirm ('Whether you enjoy programming?');
console.log(name, age, likesProgramming);
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(likesProgramming));
const greeting = (`Hey ${name}`);
alert(greeting);
const numericAge = Number(age);
let nextAge = 1 + numericAge;
console.log(nextAge);
const isAdult = 18 <=age;
console.log(isAdult)



