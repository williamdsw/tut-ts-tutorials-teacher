
class Employee extends Person {

    // FIELDS
    code: number;

    // CONSTRUCTOR
    constructor(name: string, code: number) {
        super(name);
        this.code = code;
    }

    // OVERRIDED FUNCTIONS
    find(name: string): Person {
        return new Employee (name, 1);
    }
}