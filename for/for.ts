let guardians = [
    'SUN', 'MERCURY', 'VENUS', 'MOON', 'MARS',
    'JUPITER', 'SATURN', 'NEPTUNE', 'URANUS', 'PLUTO'
];

let card = 'Dark Magician';

// FOR
for(let index = 0; index < guardians.length; index++) {
    console.log('#', (index + 1), guardians[index]);
}

// FOR..OF
for(let value of guardians) {
    console.log(value);
}

for(let char of card) {
    console.log(char);
}

// FOR..IN
for(let index in guardians) {
    console.log ('index:', index);
}