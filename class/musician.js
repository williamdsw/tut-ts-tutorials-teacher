var Musician = /** @class */ (function () {
    function Musician(code, name) {
        this.code = code;
        this.name = name;
    }
    Musician.prototype.display = function () {
        console.log('Musician:', this.code, ' - ', this.name);
    };
    return Musician;
}());
