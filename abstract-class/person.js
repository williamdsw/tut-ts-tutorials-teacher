var Person = /** @class */ (function () {
    // CONSTRUCTOR
    function Person(name) {
        this.name = name;
    }
    // HELPER FUNCTIONS
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
