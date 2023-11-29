import { Product } from './product.model';
import { createProductDto,UpdateProductDto,FindProductsDto} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: createProductDto):Product => {
  let newElement: Product = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newElement);
  return newElement;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex((x) => x.id === id);
  let product = {
    ...changes,
    ...products[index]
  }
  products[index] = product;
  return product;
}

export const deleteProduct = (id: string): Product[] => {
  const productToDelete = products.findIndex(x => x.id === id);
  let deleted = products.splice(productToDelete, 1);
  return deleted;
}

export const findOne = (id: string): undefined | Product => {
  const element = products.find(x => x.id === id);
  if (typeof element === 'undefined') {
    return void 0;

  } else {
    return element;
  }
}

export const findProducts = (dto:FindProductsDto):Product[] => {
  dto.tags = ['12|12','1323213'];
  dto.tags?.pop();
  dto.tags?.push();
  return products;
}
