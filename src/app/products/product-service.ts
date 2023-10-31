import {Product} from "./product-model";
import { Response } from "../responseInterface";
import {CreateProductDtoV2, UpdateProduct, findProductDto} from "./productDto";
import {faker} from '@faker-js/faker';

export const products: Product[] = [];

export function addProduct(data: CreateProductDtoV2): Product {
  //data.id = 1; //Da error, porque declaramos el atributo id como readonly en la interfaz
  const newProduct = {
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
  products.push(newProduct);
  return newProduct;
}

/*Una manera de acceder al tipado de un atributo de una interfaz es: Product["id"].
De esta manera si se cambia el tipado directamente en la interfaz;
Sería transparente/dinámico para en donde se utilice, como en este caso.*/
export function updateProductById(id: Product["id"], changes: UpdateProduct): Product {
  const index  = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {...prevData, ...changes};
  return products[index];
}

export function deleteProduct(id: string | number | undefined): Response {
  let bandera:boolean = false;
  products.forEach((elem, idx, array) => {
    if (elem.id === id) {
      array.splice(idx, 1);
      bandera = true;
    }
  });
  if (bandera) { return {status: 200, response: "Ok"};}
  return {status: 404, response: "Not Found"};
}

export function getProductById(id: string | number | undefined): Response {
  const myProduct = products.find((elem) => elem.id === id);

  if (myProduct) {return {status: 200, response: "Found", dataResponse: myProduct};}
  return {status: 404, response: "Not Found"};
}

export function findProducts(params:findProductDto): Product[] {
//Ya no se puede modificar debido que especificamos en la interfaz que sea Readonly.
//params.color = "blue"; //Esto daría error.

//code

return products;
}
