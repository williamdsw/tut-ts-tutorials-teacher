// common
function display() {
    console.log('Called inside display function');
}
display();
// with parameters and return type
function sum(x, y) {
    return x + y;
}
console.log('10 + 56 =', sum(10, 56));
// anonymous function
var anonymousFunction = function () {
    console.log('Content of the anonymous function');
};
anonymousFunction();
// anonymous function with parameters and return type
var divide = function (x, y) {
    return x / y;
};
console.log('10 / 56 = ', divide(10, 56));
// common with default and optional parameters
function getFullName(first, middle, last) {
    if (last === void 0) { last = 'Sylvian'; }
    return first + " " + middle + " " + last;
}
console.log(getFullName('Paul'));
console.log(getFullName('Bill', 'Joseph', 'Markillan'));
console.log(getFullName('David'));
