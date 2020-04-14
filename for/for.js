var guardians = [
    'SUN', 'MERCURY', 'VENUS', 'MOON', 'MARS',
    'JUPITER', 'SATURN', 'NEPTUNE', 'URANUS', 'PLUTO'
];
var card = 'Dark Magician';
// FOR
for (var index = 0; index < guardians.length; index++) {
    console.log('#', (index + 1), guardians[index]);
}
// FOR..OF
for (var _i = 0, guardians_1 = guardians; _i < guardians_1.length; _i++) {
    var value = guardians_1[_i];
    console.log(value);
}
for (var _a = 0, card_1 = card; _a < card_1.length; _a++) {
    var char = card_1[_a];
    console.log(char);
}
// FOR..IN
for (var index in guardians) {
    console.log('index:', index);
}
