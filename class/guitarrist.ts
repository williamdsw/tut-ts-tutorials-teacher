
class Guitarrist extends Musician {

    guitarModel: string;

    constructor(code: number, name: string, guitarModel: string) {
        super(code, name);
        this.guitarModel = guitarModel;
    }

    display(): void {
        console.log ('Guitarrist guitar model =', this.guitarModel);
    }
}