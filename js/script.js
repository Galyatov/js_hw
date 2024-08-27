function padString(str, length, char, addLeft = false) {
    if (typeof str !== 'string') {
        return 'Error: Перший аргумент має бути рядком.';
    }
    if (typeof length !== 'number' || length < 0) {
        return 'Error: Другий аргумент має бути невід\'ємним числом.';
    }
    if (char !== undefined && (typeof char !== 'string' || char.length !== 1)) {
        return 'Error: Третій аргумент має бути рядком довжиною 1 символ.';
    }
    if (typeof addLeft !== 'boolean') {
        return 'Error: Четвертий аргумент має бути булевим значенням (true або false).';
    }
    if (length < str.length) {
        return str.substr(0, length);
    }
    char = char || ' ';
    const paddingLength = length - str.length;
    const padding = char.repeat(paddingLength);
    if (addLeft) {
        return padding + str;
    } else {
        return str + padding;
    }
}
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2));
console.log(padString('hello', 8));
console.log(padString('hello', 8, '!', true));
console.log(padString('hello', 3, '-'));
console.log(padString('hello', 5, '-'));
console.log(padString('hello', 8, '-'));
console.log(padString('hello', '8', '-'));
console.log(padString('hello', 8, '**'));
console.log(padString('hello', 8, '-', 'left'));