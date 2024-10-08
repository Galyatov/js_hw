'use strict';

const listItems = document.querySelectorAll('ul li');
listItems.forEach(item => console.log(item.textContent));

const ulElement = document.querySelector('ul');
const attributesValues = [];
const attributesNames = [];

for (let attr of ulElement.attributes) {
    attributesValues.push(attr.nodeValue);
    attributesNames.push(attr.nodeName);
}
console.log(attributesValues);

console.log(attributesNames);

const lastLi = document.querySelector('ul li:last-child');
lastLi.textContent = 'Привіт, мене звати Паша';

const firstLi = document.querySelector('ul li:first-child');
const yourName = 'Паша';
firstLi.setAttribute('data-my-name', yourName);

ulElement.removeAttribute('data-dog-tail');