// IMUSICIAN
var musician = {
    code: 1,
    name: 'Duff Mckagan',
    getOccupation: function () {
        return 'Bass player';
    },
    getAge: function (birthdate) {
        return new Date().getFullYear() - birthdate.getFullYear();
    }
};
console.log('musician', musician);
console.log('occupation', musician.getOccupation());
console.log('age', musician.getAge(new Date('1964-02-05')));
// KEY PAIR
var keyPair = { key: 2, value: 'Billy' };
console.log(keyPair);
// KEY VALUE PROCESSOR
var keyValueProcessor;
keyValueProcessor = add;
keyValueProcessor(10, 'Steven');
keyValueProcessor = update;
keyValueProcessor(15, 'Slash');
// NUM LIST
var numbers = [100, 99, 564, 23];
console.log(numbers[0]);
// STRING ARR
var words = [];
words['SPFC'] = 'São Paulo';
words['SCCP'] = 'Corinthians';
words['SFC'] = 'Santos';
words['SEP'] = 'Palmeiras';
console.log(words);
