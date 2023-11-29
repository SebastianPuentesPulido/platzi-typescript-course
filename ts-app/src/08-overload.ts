// Sebas => [S,e,b,a,s] => string => string[]
// [s,e,b,a,s] => sebas => string[] => string

function parseStr(input:string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Nico');
console.log('rtaArray','Nico =>',rtaArray);
// rtaArray.push(); not exists
if (typeof rtaArray === 'object') {
  rtaArray.push('S');
}


const rtaStr = parseStr(['S','E','B','A','S']);
// rtaStr.toLowerCase(); not exists
if (typeof rtaStr === 'string') {
  rtaStr.toLocaleLowerCase();
}
console.log('rtaStr',"['S','E','B','A','S'] =>",rtaStr);
