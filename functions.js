function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
}
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(twoFer());
console.log(twoFer("Rina"));
console.log(isLeapYear(1900));
console.log(isLeapYear(2013));
