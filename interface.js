"use strict";
exports.__esModule = true;
var shoes = {
    name: "vegan suede shoes",
    price: 90,
    applyDiscount: function (discount) {
        if (discount === void 0) { discount = 10; }
        var newPrice = this.price * (1 - discount);
        console.log(newPrice);
        return newPrice;
    }
};
console.log(shoes);
