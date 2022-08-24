var ages = [];
var gameBoard = [];
var productArray = [];
function getTotal(products) {
    console.log(products.length);
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
}
var dildo = { name: "dildo", price: 10 };
var screenPortable = { name: "screen portable", price: 200 };
var headphone = { name: "headphone", price: 40 };
productArray.push(dildo, screenPortable, headphone);
console.log(getTotal(productArray));
