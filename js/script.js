'use strict';

const createArray = () => {
    let mas = [];
    let length = prompt('Введіть довжину масиву:');
    for (let i = 0; i < length; i++) {
        let element = prompt(`Введіть елемент масиву ${i + 1}:`);
        mas.push(Number(element));
    }
    document.body.innerHTML += `<p>Початковий масив: ${mas.join(', ')}</p>`;
    mas.sort((a, b) => a - b);
    document.body.innerHTML += `<p>Відсортований масив: ${mas.join(', ')}</p>`;
    mas.splice(1, 3);
    document.body.innerHTML += `<p>Масив після видалення елементів: ${mas.join(', ')}</p>`;
}
createArray();