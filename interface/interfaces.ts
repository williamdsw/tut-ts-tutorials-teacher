// IMUSICIAN

let musician: IMusician = {
    code: 1,
    name: 'Duff Mckagan',

    getOccupation () {
        return 'Bass player';
    },

    getAge (birthdate: Date): number {
        return new Date ().getFullYear () - birthdate.getFullYear ();
    }
};

console.log ('musician', musician);
console.log ('occupation', musician.getOccupation ())
console.log ('age', musician.getAge (new Date ('1964-02-05')))

// KEY PAIR

let keyPair: KeyPair = { key: 2, value: 'Billy' };
console.log (keyPair);

// KEY VALUE PROCESSOR

let keyValueProcessor: KeyValueProcessor;
keyValueProcessor = add;
keyValueProcessor(10, 'Steven');
keyValueProcessor = update;
keyValueProcessor(15, 'Slash');

// NUM LIST

let numbers: INumList = [100, 99, 564, 23];
console.log (numbers[0]);

// STRING ARR

let words: IStringList;
words['SPFC'] = 'São Paulo';
words['SCCP'] = 'Corinthians';
words['SFC'] = 'Santos';
words['SEP'] = 'Palmeiras';
console.log (words);



