'use strict';

function createCounter() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    };
}

const counter = createCounter();
const parentElement = document.body;

const appendHTMLElement = (parentElement, elementToAppend) => {
    if (!parentElement || !elementToAppend) return;
    parentElement.appendChild(elementToAppend);
};

const generateTable = () => {
    const tableSize = 10;
    const table = document.createElement('table');
    table.className = 'table';
    const tbody = document.createElement('tbody');

    table.appendChild(tbody);

    for (let i = 1; i <= tableSize; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= tableSize; j++) {
            const cell = document.createElement('td');
            cell.textContent = counter();
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    return table;
};

appendHTMLElement(parentElement, generateTable());