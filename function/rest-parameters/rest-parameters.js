function printAll() {
    var sentences = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sentences[_i] = arguments[_i];
    }
    console.log(sentences.join(' '));
}
printAll('A B C', 'One two three!');
printAll('First');
printAll();
