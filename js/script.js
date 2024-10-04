'use strict';


const textField = document.getElementById('textField');
const sideDiv = document.getElementById('sideDiv');

textField.addEventListener('focus', function() {
    sideDiv.style.display = 'block';
});

textField.addEventListener('blur', function() {
    sideDiv.style.display = 'none';
});