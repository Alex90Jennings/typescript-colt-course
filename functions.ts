function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me`
}

const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

console.log(twoFer())
console.log(twoFer("Rina"))

console.log(isLeapYear(1900))
console.log(isLeapYear(2013))
