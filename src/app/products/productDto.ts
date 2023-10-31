import { Product } from "./product-model";

//OMIT
/*Nos quedamos con un nuevo tipo con todo lo que es la interfaz Product MENOS los campos que se le "pide"
que omitiera.*/
type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

/*Con interface sería de la siguiente manera */
export interface CreateProductDtoV2 extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string | number,
}

//PICK
/*Es lo contrario a Omit, aquí decido con qué campos quedarme. Entonces example hereda de Product y
sólo elegimos 2 campos a heredar. */
type example = Pick<Product, 'color' | 'description'>;

//PARTIAL
//Con partial obtienes una copia de la interfaz de Product pero con todas sus propiedades como opcionales.
type UpdateProductDto = Partial<Product>;

//Con interfaz
export interface UpdateProduct extends Partial<CreateProductDtoV2> {}

//REQUIRED
/*Lo contrario a partial es required, que todo lo deja como obligatorio */
type example2 = Required<Product>;

//READONLY Type
/*A todos los atributos de Product aplicarles in readonly */
type example3 = Readonly<Product>;

//Que sea partial ( atributos opcionales) y de solo lectura.
export interface findProductDto extends Readonly<Partial<Omit<Product, "tags">>> {
  readonly tags: ReadonlyArray<string>
  /*El primer readonly es para evitar modificar valor de los atributos.
  El ReadonlyArray es para evitar métodos (push,pop,unshift) de mutación de arrays.*/
}
