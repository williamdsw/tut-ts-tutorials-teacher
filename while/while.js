var BANDS = [
    'Depeche Mode', 'Duran Duran', 'Ministry', 'Nine Inch Nails',
    'A-ha', 'Tears for Fears', 'Sparks'
];
var index = 0;
// while
while (index < BANDS.length) {
    console.log(BANDS[index]);
    index++;
}
// do-while
do {
    index--;
    console.log(BANDS[index]);
} while (index > 0);
