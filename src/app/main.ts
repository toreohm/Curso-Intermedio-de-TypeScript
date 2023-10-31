import {addProduct, products, getProductById, deleteProduct, updateProductById, findProducts} from "./products/product-service";
import {faker} from '@faker-js/faker';
import { Response } from "./responseInterface";

for (let index = 0; index < 5; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(["a", "b", "c", "d", "e", "f"]),
    stock: faker.number.int({min: 10, max: 100}),
    size: faker.helpers.arrayElement(['S' , 'M' , 'L' , 'XL']),
    categoryId: faker.string.uuid()});
}

//CRUD OPERATIONS
//UPDATE
console.log(products);
const product = products[0];
updateProductById(product.id, {title: "New title", stock: 80, price: 10});

//GET
findProducts({
  stock: 10,
  color: "red",
  price: 100,
  isNew: true,
  tags: ["A", "B", "C"],
});
