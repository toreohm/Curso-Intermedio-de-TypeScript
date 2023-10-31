/*En TypeScript, ReadonlyArray es un tipo que representa una versión de solo lectura de un array.
Esto quiere decir que una vez creado un ReadonlyArray, no puedes cambiar sus elementos o su longitud.*/

const numbers:number[] = [1,2,3,4,5,6];
//De esta manera a numbers se le puede aplicar métodos de mutación.
numbers.push(10);
numbers.pop();

//Podemos evitar esto de la siguiente manera:
const numbersV2:ReadonlyArray<number> = [1,2,3,4,5,6];

//numbersV2.unshift(); //⛔Da error, ya no reconoce el método.
//numbersV2[0] = 100; // ⛔NO permitido porque se intenta modificar un valor en el array
console.log(numbersV2[2]); //✅Está permitido, imprime un valor
console.log(numbersV2.length); //✅SÍ está permitido, imprime la longitud del array

/*De esta manera para eliminar/modificar elementos del array sería a través de métodos como:
filter, map, etc; Creando un nuevo array como resultado.*/
