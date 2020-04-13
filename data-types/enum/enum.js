// declaration
var MetalGenres;
(function (MetalGenres) {
    MetalGenres[MetalGenres["HeavyMetal"] = 0] = "HeavyMetal";
    MetalGenres[MetalGenres["ThrashMetal"] = 1] = "ThrashMetal";
    MetalGenres[MetalGenres["PowerMetal"] = 2] = "PowerMetal";
    MetalGenres[MetalGenres["BlackMetal"] = 3] = "BlackMetal";
    MetalGenres[MetalGenres["DeathMetal"] = 4] = "DeathMetal";
})(MetalGenres || (MetalGenres = {}));
var RockGenres;
(function (RockGenres) {
    RockGenres["Rock"] = "ROCK";
    RockGenres["Metal"] = "METAL";
    RockGenres["HardRock"] = "HARD ROCK";
    RockGenres["Punk"] = "PUNK";
})(RockGenres || (RockGenres = {}));
function getMetalGenre(genre) {
    if (genre === 'Heavy') {
        return MetalGenres.HeavyMetal;
    }
}
var metal = getMetalGenre('Heavy');
// output
console.log('Metal...', metal);
console.log('Metal Genres: ', MetalGenres);
console.log('Rock Genres: ', RockGenres);
console.log('Hard Rock... ', RockGenres['HardRock']);
