/**
 * Interfaces en TS
Las interfaces funcionan muy similar a como lo hace type,
pero en las interfaces solo aplica para los objetos
 */

type Sizes = 'XL' | 'M' | 'S';
// type Product = {
//   id: string | number,
//   title:string,
//   stock:number,
//   createdAt:Date,
//   size:Sizes
// }

interface Product {
  id: string | number,
  title: string,
  stock: number,
  createdAt: Date,
  size: Sizes
}

const products: Product[] = [];

products.push({
  id: 123,
  title: "pc",
  stock: 123,
  createdAt: new Date(),
  size: 'XL'
})
