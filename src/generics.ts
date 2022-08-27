
function getRandomElement<T>(list: T[]): T {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}

function merge<T extends object,U extends object>(object1: T, object2: U) {
    return {...object1, ...object2}
}

console.log(merge({name: "alex"}, {flakjd: 9}))