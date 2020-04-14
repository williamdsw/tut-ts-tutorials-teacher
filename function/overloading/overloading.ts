
function display(a: string, b: string): void;
function display(a: number, b: number): void;
function display(a: boolean, b: boolean): void;

function display(a: any, b: any): void {
    console.log (a + b);
}

display('ABC', '123');
display(56, 873);
display(true, false);