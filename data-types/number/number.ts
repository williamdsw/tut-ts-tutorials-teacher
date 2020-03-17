
let integer: number = 123;
let float: number = 12.3;
let hexadecimal: number = 0x37CF;
let octal: number = 0o377;
let binary: number = 0b111001;

console.log ('integer:', integer);
console.log ('float:', float);
console.log ('hexadecimal:', hexadecimal);
console.log ('octal:', octal);
console.log ('binary:', binary);

let toExponential: string = integer.toExponential ();
let toFixed: string = float.toFixed (3);
let toLocaleString: string = float.toLocaleString ('pt-BR');
let toPrecision: string = float.toPrecision (1);

console.log ('toExponential:', toExponential);
console.log ('toFixed:', toFixed);
console.log ('toLocaleString:', toLocaleString);
console.log ('toPrecision:', toPrecision);

