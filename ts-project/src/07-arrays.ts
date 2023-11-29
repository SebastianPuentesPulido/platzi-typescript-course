(()=> {
  let prices = [1,2,3,4,5,6,5,4,'',true];
  // prices.push('xd');
  // prices.push(true);
  // prices.push({});
  prices.push(2);
  prices = [1,2,3];

  let products = ['hola',true];
  products.push(23);

  let mixed: (number | string | boolean | object)[] = ['hola',true];
  mixed.push(23);
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6,5,4];
  numbers.map(x => x*2)
})();
