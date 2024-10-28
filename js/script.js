'use strict';

let product = {
    quantity: 0
};
Object.defineProperty(product, 'name', {
    get: function() {
        return this._name;
    },
    set: function(value) {
        if (typeof value !== 'string' || value === '') {
            console.log("Error: Name must be a non-empty string.");
        } else {
            this._name = value;
        }
    }
});
Object.defineProperty(product, 'price', {
    get: function() {
        return this._price;
    },
    set: function(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.log("Error: Price must be a number greater than 0.");
        } else {
            this._price = value;
        }
    }
});

Object.defineProperty(product, 'totalValue', {
    get: function() {
        return this.price * this.quantity;
    }
});

product.name = "Phone";
product.price = 777;
product.quantity = 9;

console.log(product.name);
console.log(product.price);
console.log(product.totalValue);

product.name = "";
product.price = -9;
