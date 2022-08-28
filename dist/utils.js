"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.findRandom = void 0;
function findRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
exports.findRandom = findRandom;
function add(x, y) {
    return x + y;
}
exports.add = add;
