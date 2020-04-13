// declarations

let code: (string | number);

function displayType(code: (string | number)) {
    console.log ('code: ', code);

    if (typeof(code) === 'number') {
        console.log ('code is number...');
    } else if (typeof(code) === 'string') {
        console.log ('code is string...');
    }
}

code = 'C0000001';
displayType(code);
code = 165;
displayType(code);