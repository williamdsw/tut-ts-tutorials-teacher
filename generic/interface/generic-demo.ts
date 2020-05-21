import { KeyPair } from "./key-pair";

let keyPair1: KeyPair<number, string> = {
    key: 1, value: 'Ronnie James Dio'
};

let keyPair2: KeyPair<string, string> = {
    key: 'Ronnie James Dio', value: 'Singer'
};

console.log ('keyPair1', keyPair1);
console.log ('keyPair2', keyPair2);