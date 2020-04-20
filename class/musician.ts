
class Musician implements IPerson {

    code: number;
    name: string;

    constructor(code: number, name: string) {
        this.code = code;
        this.name = name;
    }

    display(): void {
        console.log ('Musician:', this.code, ' - ', this.name);
    }
}
