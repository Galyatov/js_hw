'use strict';

let user = {
    _name: 'Invisible',

    _age: 0,

    get name() {
        return this._name;
    },

    set name(newName) {
        this._name = newName;
    },

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 120) {
            this._age = newAge;
        } else {
            console.error('This age is impossible for a person');
        }
    }
};

user.name = 'Pasha';
console.log(user.name);

user.age = 21;
console.log(user.age);

user.age = 130;

