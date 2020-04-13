// declaration

enum MetalGenres {
    HeavyMetal,
    ThrashMetal,
    PowerMetal,
    BlackMetal,
    DeathMetal
}

enum RockGenres {
    Rock = 'ROCK',
    Metal = 'METAL',
    HardRock = 'HARD ROCK',
    Punk = 'PUNK',
}

function getMetalGenre(genre: string): MetalGenres {
    if(genre === 'Heavy') {
        return MetalGenres.HeavyMetal;
    }
}

let metal: MetalGenres = getMetalGenre ('Heavy');

// output
console.log ('Metal...', metal);
console.log ('Metal Genres: ', MetalGenres);
console.log ('Rock Genres: ', RockGenres);
console.log ('Hard Rock... ', RockGenres['HardRock']);