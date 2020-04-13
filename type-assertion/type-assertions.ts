let id: any = 10;
let userId = <number> id;
let otherUserId = id as number;
console.log ('userId: ', userId, 'of type', typeof(userId));
console.log ('otherUserId: ', otherUserId, 'of type', typeof(otherUserId));

let bandMember = <BandMember> {};
bandMember.id = 1;
bandMember.name = 'Billy Idol';
bandMember.occupation = 'Vocalist';

let otherBandMember: BandMember = {
    id: 2,
    name: 'Steve Stevens',
    occupation: 'Guitarrist'
};

console.log('bandMember', bandMember);
console.log('otherBandMember', otherBandMember);