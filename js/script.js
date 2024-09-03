'use strict';

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
const array = [7, 6, 5, 4, 3, 2, 1];
removeElement(array, 7);
console.log(array);
