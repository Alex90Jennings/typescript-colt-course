function printDawg(dog) {
    console.log("".concat(dog.name.first, ", ").concat(dog.gender === "male" ? "son" : "daughter", " of ").concat(dog.parents.mum, " and ").concat(dog.parents.dad, ", is the cutest ").concat(dog.breed, " puppy ever. and still only ").concat(dog.age, ", ").concat(dog.gender === "male" ? "he" : "she", " ").concat(dog.lovesToSnuggle === true ? "loves to snuggle" : "prefers to be alone"));
}
var rinaDog = {
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
};
printDawg(rinaDog);
