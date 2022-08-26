"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shoes = {
    name: "vegan suede shoes",
    price: 90,
    applyDiscount(discount = 10) {
        const newPrice = this.price * (1 - discount);
        console.log(newPrice);
        return newPrice;
    }
};
console.log(shoes);
