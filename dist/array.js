"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ages = [];
const gameBoard = [];
const productArray = [];
function getTotal(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
}
const dildo = { name: "dildo", price: 10 };
const screen = { name: "screen portable", price: 200 };
const headphone = { name: "headphone", price: 40 };
productArray.push(dildo, screen, headphone);
console.log(getTotal(productArray));
