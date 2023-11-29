const prices:(number | string)[] = [1,23,1,22,33,];
prices.push(1);
prices.push('string');

let user:[string,number,boolean];

// user = ['sebastian',12];
// user = ['sebastian'];
// user = ['nico',12];

user = ['sebastian',17,true];

const [username,age] = user;
console.log('username',username);
console.log('age',age);
