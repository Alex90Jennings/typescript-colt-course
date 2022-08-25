var highScore;
var stuff;
var colours = [];
function greet(names) {
    if (typeof names === "string")
        return "Hello, ".concat(names);
    else {
        var greetings = "";
        for (var i = 0; i < names.length; i++) {
            greetings += "Hello, ".concat(names[i]);
        }
        return greetings;
    }
}
console.log(greet("Rinalda"));
console.log(greet(["Rinalda", "Alex", "Simona"]));
