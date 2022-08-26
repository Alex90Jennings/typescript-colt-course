interface Product {
    name: string,
    price: number,
    applyDiscount: (discount: number) => number
}

const shoes: Product = {
    name: "vegan suede shoes",
    price: 90,
    applyDiscount(discount = 10) {
        const newPrice = this.price * (1 - discount)
        console.log(newPrice)
        return newPrice
    }
}

console.log(shoes)

export {}