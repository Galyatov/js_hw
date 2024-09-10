'use strict';

const mas = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const minimum = Math.min(...mas);
console.log('Мінімальний елемент:', minimum);


const max = Math.max(...mas);
console.log('Максимальний елемент:', max);

const negative = mas.filter((namber) => namber < 0);
console.log('Кількість негативних елементів:', negative.length);

const pozitive_noparne = mas.filter((namber) => namber > 0 && namber % 2 === 1);
console.log('Кількість непарних позитивних елементів:', pozitive_noparne.length);

const pozitive_parne = mas.filter((namber) => namber > 0 && namber % 2 === 0);
console.log('Кількість парних позитивних елементів:', pozitive_parne.length);

const sum = (mas) => mas.reduce((acc, curr) => acc + curr, 0);

console.log('Сума парних позитивних елементів:', sum(pozitive_parne));
console.log('Сума непарних позитивних елементів:', sum(pozitive_noparne));

const pozitive = mas.filter((namber) => namber > 0);

const dobut = (mas) => mas.reduce((acc, curr) => acc * curr, 1);
console.log('Добуток позитивних елементів:', dobut(pozitive));

const mas_max = (mas) => {
    const maxValue = Math.max(...mas);
    for (let i = 0; i < mas.length; i++) {
        if (mas[i] !== maxValue) {
            mas[i] = 0;
        }
    }
    return mas;
}

console.log('Масив після обнулення всіх, крім максимального:', mas_max([...mas]));