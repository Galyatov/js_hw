'use strict';

let user = {
    get name() {
        return this._name;
    },

    set name(name) {
        this._name = name;
    },

    _age: 0,

    get age() {
        return this._age;
    },

    set age(value) {
        if (typeof value === 'number' && value > 0 && value < 120) {
            this._age = value;
        } else {
            console.error('This age is impossible for a person');
        }
    }
};

user.name = "Pasha";
console.log(user.name);

user.age = 21;
console.log(user.age);

user.age = 777;
