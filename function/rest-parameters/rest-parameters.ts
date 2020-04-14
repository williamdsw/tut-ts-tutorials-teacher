
function printAll(...sentences: string[]) {
    console.log (sentences.join(' '));
}

printAll('A B C', 'One two three!');
printAll('First');
printAll();