"use strict";
let highScore;
let stuff;
const colours = [];
function greet(names) {
    if (typeof names === "string")
        return `Hello, ${names}`;
    else {
        let greetings = "";
        for (let i = 0; i < names.length; i++) {
            greetings += `Hello, ${names[i]} `;
        }
        return greetings;
    }
}
console.log(greet("Rinalda"));
console.log(greet(["Rinalda", "Alex", "Simona"]));
