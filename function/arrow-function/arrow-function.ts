// declarations
let sum = (x: number, y: number) => {
    return x + y;
}

let subtract = (x: number, y: number) =>  x - y;
let printSomething = () => console.log('Something...?');

console.log('14.56 + 78.21 =', sum(14.56, 78.21));
console.log('14.56 - 78.21 =', subtract(14.56, 78.21));
printSomething();