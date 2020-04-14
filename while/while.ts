const BANDS: string[] = [
    'Depeche Mode', 'Duran Duran', 'Ministry', 'Nine Inch Nails',
    'A-ha', 'Tears for Fears', 'Sparks'
];

let index = 0;

// while
while(index < BANDS.length) {
    console.log(BANDS[index]);
    index++;
}

// do-while
do {
    index--;
    console.log(BANDS[index]);
} while (index > 0);