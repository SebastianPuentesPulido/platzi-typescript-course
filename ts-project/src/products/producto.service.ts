import {Product} from './product.model'

export const products:Product[] = [];

export const addProduct = (data:Product) => {
  products.push(data);
}

export const calcStock = ():number => {
  let total:number = 0;
  products.forEach(x => total += x.stock);
  return total;
}
