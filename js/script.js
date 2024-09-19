'use strict';

function myBind(func, context) {
    const bindArgs = Array.prototype.slice.call(arguments, 2);

    return function() {
        const funcArgs = Array.prototype.slice.call(arguments);
        return func.apply(context, bindArgs.concat(funcArgs));
    };
}
const user = {
    name: 'Jordan',
    age: 77,
    funk: function () {
        console.log('hello ' + this.name);
    }
};

const boundFunc = myBind(user.funk, user);
boundFunc();
