
interface IMusician {

    // FIELDS

    readonly code: number;
    name: string;

    // FUNCTIONS

    getAge: (birthdate: Date) => number;
    getOccupation(): string;
}