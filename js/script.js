'use strict';

function createElements() {
    const div = document.createElement('div');
    div.style.display = 'flex';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.style.marginRight = '10px';

    const sideDiv = document.createElement('div');
    sideDiv.style.display = 'none';
    sideDiv.innerHTML = 'Hala Madrid';

    return { div, textInput, sideDiv };
}

function appendElementsToPage(elements) {
    elements.div.appendChild(elements.textInput);
    elements.div.appendChild(elements.sideDiv);
    document.body.appendChild(elements.div);
}

function addEventListeners(elements) {
    elements.textInput.addEventListener('focus', () => {
        elements.sideDiv.style.display = 'block';
    });

    elements.textInput.addEventListener('blur', () => {
        elements.sideDiv.style.display = 'none';
    });
}

const elements = createElements();
appendElementsToPage(elements);
addEventListeners(elements);
