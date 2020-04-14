// declarations
var sum = function (x, y) {
    return x + y;
};
var subtract = function (x, y) { return x - y; };
var printSomething = function () { return console.log('Something...?'); };
console.log('14.56 + 78.21 =', sum(14.56, 78.21));
console.log('14.56 - 78.21 =', subtract(14.56, 78.21));
printSomething();
