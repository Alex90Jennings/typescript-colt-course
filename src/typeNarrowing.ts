function triple (value: number | string){
    if(typeof value === "number") return value * 3
    return value.repeat(3)
}

console.log(triple("fart"))
console.log(triple(-3))