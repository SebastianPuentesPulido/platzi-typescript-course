/**
 * no debemos usar el operador or(||) debido a que compara
 * si el valor es 0, '',false, todo lo anterior lo toma como false,
 * en cambio el nullish coalescing o operador de coalicion nula
 * solo funciona con null y undefined.
 */


export const createProduct = (
  id:string | number,
  isNew: boolean,
  stock?:number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

const rta = createProduct('12',true,12);

console.log(rta);

const rta2 = createProduct('12',true);

console.log(rta2);

const rta3 = createProduct('12',false,0);
console.log(rta3);
