// declarations
let something: any;
let others: any[] = [];

function changeType(value: any) {
    something = value;
    console.log('something:', something, 'type is', typeof(something));
}

function pushAny(value: any) {
    others.push(value);
    console.log('others:', others);
}

changeType('Some text...');
changeType(45);
changeType(false);
changeType(67.95);

pushAny('Other text');
pushAny(87.45);
pushAny(100);
pushAny(true);