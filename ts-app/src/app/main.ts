import { faker } from '@faker-js/faker';
import { addProduct,products, updateProduct,findProducts} from './products/products.service';

for (let i = 0; i <= 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size:faker.helpers.arrayElement(['XL','M','S','L']),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.rgb(),
    isNew: faker.datatype.boolean(),
    price: Number(faker.commerce.price()),
    tags: faker.helpers.arrayElements(['technology', 'biology', 'animals', 'cars']),
    categoryId:faker.string.uuid()
  });
}

const product = products[0];
updateProduct(product.id,{title:'pc',stock:1234,categoryId:'xxd'});
console.log(products);

findProducts({
  title:'pc',
  isNew:true,
  tags:['sdsa','wdwdq']
});
