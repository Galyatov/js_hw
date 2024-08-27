function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const length = Number(prompt('Введіть число'));
if (isNaN(length) || length <= 0) {
    console.log('Будь ласка, введіть коректне додатнє число.');
} else {
    let sum = '';
    const generateKey = function () {
        sum = '';
        for (let i = 0; i < length; i++) {
            sum += characters[getRandomInt(0, characters.length - 1)];
        }
        console.log(sum);
        return sum;
    }
    console.log(generateKey());
}