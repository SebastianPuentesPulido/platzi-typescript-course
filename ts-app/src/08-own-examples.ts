const toArray = (name:string): string[] => {
  return [...name];
}
console.log(toArray('sebastian'));

const toArrayV2 = (name:string):string[] => {
  let arr:string[] = [];
  for (let i = 0;i<name.length;i++) {
    arr.push(name[i]);
  }
  return arr;
}

const myArr = (letters:string[]):void => {
  let str:string = '';
  letters.forEach(x=> {
    str += x;
  });

  console.log(str);
}

console.log(toArrayV2('sebastian'));

myArr(['s','e','b','a','s'])

