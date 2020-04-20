
abstract class Person {

    // FIELDS
    name: string;

    // CONSTRUCTOR
    constructor(name: string) {
        this.name = name;
    }

    // ABSTRACT FUNCTIONS
    abstract find(string): Person;

    // HELPER FUNCTIONS
    display(): void {
        console.log (this.name);
    }
}
