let person: IPerson = {
    name: 'Axl',
    display(): void {}
};

console.log (person);

let musician: IPerson = new Musician(2, 'Duff');
musician.display ();

let guitarrist: Musician = new Guitarrist(3, 'Slash', 'Les Paul');
guitarrist.display ();