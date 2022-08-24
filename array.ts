const ages: number[] = []
const gameBoard: string[][] = []
type Product = {
    name: string;
    price: number;
}
const productArray: Array<Product> = []

function getTotal(products: Product[]): number {
    let sum = 0
    for(let i = 0; i < products.length; i++){
        sum += products[i].price
    }
    return sum
}

const dildo = {name: "dildo", price: 10}
const screenPortable = {name: "screen portable", price: 200}
const headphone = {name: "headphone", price: 40}

productArray.push(dildo, screenPortable, headphone)

console.log(getTotal(productArray))