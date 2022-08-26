type Dawg = {
    name: {
        first: string, 
        surname: string
    }, 
    breed: string, 
    parents: {
        dad: string, 
        mum: string
    },
    gender: string,
    age: number
}

type Pet = {
    isPet: Boolean,
    lovesToSnuggle: Boolean
}

type DawgPet = Dawg & Pet

function printDawg(dog: DawgPet): void {
    console.log(`${dog.name.first}, ${dog.gender === "male" ? "son" : "daughter"} of ${dog.parents.mum} and ${dog.parents.dad}, is the cutest ${dog.breed} puppy ever. and still only ${dog.age}, ${dog.gender === "male" ? "he" : "she"} ${dog.lovesToSnuggle === true ? "loves to snuggle" : "prefers to be alone"}`)
}

const rinaDog: DawgPet = {
    name: {
        first: "Rina", 
        surname: "JDP"
    }, 
    breed: "Dacschund-Mini", 
    parents: {
        dad: "Alex", 
        mum: "Simona"
    },
    gender: "female",
    age: 3,
    isPet: true,
    lovesToSnuggle: true
}

printDawg(rinaDog)