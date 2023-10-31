/*Los parámetros por defecto se usan para predefinir valores a los parámetros de una función en
caso de no especificar un valor al invocarla. Podemos usar esto como alternativa al nullish-coalescing.*/

export const createProduct = (
  id: string | number = "id1000",
  isNew: boolean = true,
  stock: number = 10) =>
  {
  return {id, stock, isNew};
};

const p1 = createProduct("1", true, 1000);
console.log(p1);

const p2 = createProduct("1");
console.log(p2);

const p3 = createProduct();
console.log(p3);

const p4 = createProduct(11111, false);
console.log(p4);
