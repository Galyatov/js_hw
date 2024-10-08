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
lastLi.textContent = 'Hi, my name is Pasha.';

const firstLi = document.querySelector('ul li:first-child');
const yourName = 'Pasha';
firstLi.setAttribute('data-my-name', yourName);

ulElement.removeAttribute('data-dog-tail');