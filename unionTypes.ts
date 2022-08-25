let highScore: number | boolean

let stuff: number[] | string[]

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

type SkiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: SkillLevel
}

type RGBColour = {
    r: number,
    g: number,
    b: number
}

type HSLColour = {
    h: number,
    s: number,
    l: number
}

const colours: (RGBColour | HSLColour)[] = []

function greet (names: string | Array<string>) {
    if(typeof names === "string") return `Hello, ${names}`
    else {
        let greetings: string = ""
        for(let i = 0; i < names.length; i++){
            greetings += `Hello, ${names[i]} `
        }
        return greetings
    }
}

console.log(greet("Rinalda"))
console.log(greet(["Rinalda", "Alex", "Simona"]))