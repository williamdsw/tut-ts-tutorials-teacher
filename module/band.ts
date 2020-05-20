
export class Band {
    name: string;
    genres: string[];
    origin: string;

    constructor (name: string, genres: string[], origin: string) {
        this.name = name;
        this.genres = genres;
        this.origin = origin;
    }

    public displayInformation(): void {
        console.log ('Band Information \n', 'Name: ', this.name, '\nGenres: ', 
                     this.genres.join (','), '\nOrigin: ', this.origin);
    }
}