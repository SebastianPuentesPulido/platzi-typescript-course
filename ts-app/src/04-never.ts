const withoutEnd = () => {
  while (true) {
    console.log("nunca pares de aprender");
  }
}

const fail = (msg:string)=> {
  throw new Error(msg);
}

const example = (input:unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }

  return fail('no hizo match');
}


console.log(example('hola'));
console.log(example([12,13,3,1]));
console.log(example(123211));
console.log(example('despues del fail'));




