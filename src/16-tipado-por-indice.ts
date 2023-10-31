/*Acceder al tipado por índice se hace de una manera muy similar a la cual accedemos a valores en
arrays dentro de JavaScript, pero en este caso, aplicado a una interface, enum, entre otros,
para acceder al tipo de dato de una propiedad y que dicho tipado sea asignado en otra parte del código.*/

// Acceso por índice en una interfaz en TypeScript
/*Veamos un ejemplo de cómo podríamos acceder al tipado de la propiedad de una interfaz y utilizar
este tipado en otra parte del código como en el parámetro en la definición de una función: */

interface Human {
  id: string;
  name: string;
  age: number;
  isAlien: boolean;
}

function createHuman(id: Human["id"]) {
// code
}

/*En este caso, el parámetro id en la función createHuman sería un string. La ventaja de esto es que
si nosotros cambiáramos el tipo de dato de id a number en la interface Human, automáticamente el
tipo de dato del parámetro id de la función createHuman sería number también, pues, el tipado se
sincronizaría.*/
