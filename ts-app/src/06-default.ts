export const createProduct = (
  id:(string | number),
  isNew: boolean = true,
  stock:number = 10
) => {
  return {
    id,
    stock,
    isNew
  }
}

const rta = createProduct('12',true,12);

console.log(rta);

const rta2 = createProduct('12',true);

console.log(rta2);

const rta3 = createProduct('12',false,0);
console.log(rta3);

const rta4 = createProduct('1',false,12);
console.log(rta4);

const rta5 = createProduct(1,false);
console.log(rta5);
