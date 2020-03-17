
let hardRockBands: string[] = ['Deep Purple', 'Led Zeppelin', 'Queen', 'Whitesnake'];
let heavyMetalBands: Array<string> = ['Black Sabbath', 'Iron Maiden', 'Helloween', 'Judas Priest', 'UFO', 'Savatage'];
let albumsAndYears: (string | number)[] = ['Queen II', 1974, 'The Wall', 1979, 'Piece of Mind', 1983];

function accessArrayElements(arr: any[]) {
    for (let index in arr) {
        console.log (index, arr[index]);
    }

    for (let item of arr) {
        console.log (item);
    }
}

console.log ('Hard Rock Bands: ');
accessArrayElements (hardRockBands);
console.log ('Heavy Metal Bands: ');
accessArrayElements (heavyMetalBands);
console.log ('Albums and Release Years: ');
accessArrayElements (albumsAndYears);