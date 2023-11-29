export function parseStr(input:string):string[];
export function parseStr(input:string[]):string;
export function parseStr(input:number) : boolean;
// export function parseStr(input:string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input:unknown):unknown{
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Nico');
console.log('rtaArray','Nico =>',rtaArray);
rtaArray.push();
// if (typeof rtaArray === 'object') {
//   rtaArray.push('S');
// }


const rtaStr = parseStr(['S','E','B','A','S']);
rtaStr.toLowerCase();
// if (typeof rtaStr === 'string') {
//   rtaStr.toLocaleLowerCase();
// }
console.log('rtaStr',"['S','E','B','A','S'] =>",rtaStr);

const rtaBool = parseStr(123);
console.log(rtaBool);
