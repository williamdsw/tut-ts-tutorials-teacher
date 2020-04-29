
class Drummer extends Musician {
    private code: number;
    public band: string;

    constructor(name: string, band: string) {
        super(name);
        this.band = band;
        this.code = Math.ceil (Math.random () * 100);
    }

    getCode(): number {
        return this.code;
    }
}