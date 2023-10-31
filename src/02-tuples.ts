/*Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando el tipo de
dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar. */

const prices: (number | string)[] = [1,2,3,"a","b"]; //Tipico array en TS
prices.push(100);
prices.push("a"); //No se toma en cuenta la posición del elemento a insertar ni el limite de éstos.

//Tupla
let user: [string, number] = ["toreohm", 1000];
let user2: [string, number, boolean];

user2 = ["string", 1000]; //El número de elementos debe ser: tres.
user2 = [true, {a: 1}]; //No coincide el tipo de dato en cada posición.
user2 = ["string", 1000, true]; //Coincide en tipo de dato y en número de elementos. ✅

/*Desestructuración
Podemos aplicar desestructuración para asignar a ciertas variables respectivamente los
valores dentro de una tupla. */
{
  const user: [string, number] = ['nicobytes', 15];
  const [username, age] = user;
  console.log(username); // nicobytes
}






