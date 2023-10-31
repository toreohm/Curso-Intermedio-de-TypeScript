/*Los parámetros opcionales son aquellos que podemos obviar su envío cuando mandamos datos
en una función que requiere argumentos.
El nullish-coalescing nos permite evaluar si una variable está definida, pero si esta es null o undefined,
retorna un segundo valor diferente. */

/*Para denotar que un parámetro será opcional usamos el operador ? al lado.
Siempre debemos colocar los parámetros opcionales al final. */
export const createProduct = (id: string | number, isNew?: boolean, stock?: number) => {
  return {id, stock: stock || 10, isNew: isNew || true};
};

const p1 = createProduct("1", true, 1000);
console.log(p1);

const p2 = createProduct("1");
console.log(p2);

/*NOTA: El operador || evalúa si el primer valor es falsy, de serlo retorna un segundo valor,
si no es falsy retorna el primero. Los valores que son considerados falsy en JavaScript son:
- String vacío ""
-Número cero (0)
- El valor booleano false
Aquí surge un problema: si nosotros deseáramos mandar como argumento un valor que JavaScript
considera falsy, entonces el operador || no tomará en cuenta nuestros valores y los cambiará
por los de defecto:*/

const p3 = createProduct(1, false, 0);
console.log(p3); // {id: 1, isNew: true, stock: 10} - Vemos que no coincide.

//Este problema podemos solucionarlo con el nullish-coalescing.
/*El nullish-coalescing se representa con el operador ??. Esto evalúa si el primer valor está definido,
si no lo está (si es undefined o null), retorna el segundo: */

export const createProduct2 = (id: string | number, isNew?: boolean, stock?: number) => {
  return {id, stock: stock ?? 10, isNew: isNew ?? true};
};

const p4 = createProduct2(1, false, 0);
console.log(p4);
