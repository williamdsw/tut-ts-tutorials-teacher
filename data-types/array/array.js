var hardRockBands = ['Deep Purple', 'Led Zeppelin', 'Queen', 'Whitesnake'];
var heavyMetalBands = ['Black Sabbath', 'Iron Maiden', 'Helloween', 'Judas Priest', 'UFO', 'Savatage'];
var albumsAndYears = ['Queen II', 1974, 'The Wall', 1979, 'Piece of Mind', 1983];
function accessArrayElements(arr) {
    for (var index in arr) {
        console.log(index, arr[index]);
    }
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        console.log(item);
    }
}
console.log('Hard Rock Bands: ');
accessArrayElements(hardRockBands);
console.log('Heavy Metal Bands: ');
accessArrayElements(heavyMetalBands);
console.log('Albums and Release Years: ');
accessArrayElements(albumsAndYears);
