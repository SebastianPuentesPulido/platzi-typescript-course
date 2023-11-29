import { addProduct, calcStock, products } from './producto.service';

addProduct({
  title: 'PC Master Race',
  createdAt: new Date(1991, 25, 12),
  stock: 123
});

addProduct({
  title:'producto1',
  createdAt:new Date(1991,25,12),
  stock:1233,
  size:'XL'
});

console.log(products);

const total = calcStock();
console.log(total);

