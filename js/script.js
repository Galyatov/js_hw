for (let number = 20; number <= 30; number += 0.5) {
    console.log(number);
}
for (let number = 10; number <= 100; number += 10) {
    let grivna = number * 27;
    console.log(number + ' доларів ' + grivna + ' гривень ');
}
const n = prompt('Введіть число n');
for (let number = 1; number <= 100; number++) {
    if (number >= n) {
        break;
    }
    console.log(number);
}
let isPrime = 1;
if (n <= 1) {
    isPrime = 0;
} else if (n === 2 || n === 3) {
    isPrime = 1;
} else if (n % 2 === 0 || n % 3 === 0) {
    isPrime = 0;
} else {
    isPrime = 1;
}
for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) isPrime = 0;
}
if (isPrime === 1) {
    console.log(n + " є простим числом.");
} else {
    console.log(n + " не є простим числом.");
}
const m = prompt('Введіть число m');
if (m <= 0) {
    console.log(false);
} else {
    let current = 1;
    while (current < m) {
        current *= 3;
    }
    if (current === m) {
        console.log(true);
    } else {
        console.log(false);
    }
}