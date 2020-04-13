// single declaration
var bandMember = [1, 'Dave Mustaine'];
var otherBandMember;
otherBandMember = [1, 'David Ellefson', 'Bass Guitar'];
// array declaration
var metallica;
metallica = [
    [1, 'James Hetfield', 'Guitar'],
    [2, 'Kirk Hammett', 'Guitar'],
    [3, 'Robert Trujillo', 'Bass'],
    [4, 'Lars Ulrich', 'Drums']
];
// manipulation
var megadeth = [1, 'Dave Mustaine'];
megadeth.push(2, 'David Ellefson');
megadeth.push(3, 'Kiko Loureiro');
megadeth.push(4, 'Dirk Verbeuren');
// output
console.log('band member: ', bandMember);
console.log('other band member: ', otherBandMember);
console.log('metallica: ', metallica);
console.log('megadeth: ', megadeth);
