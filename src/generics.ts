
function getRandomElement<T>(list: T[]): T {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}

console.log(getRandomElement([1, 2, 3, 4, 5, 6]))