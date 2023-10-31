let anyVar: any; //Con any quitamos todo el poder de TS.
anyVar = true;
anyVar = 1;
anyVar = "";
anyVar = [];

let isNew: boolean = anyVar; //Cualquier valor puede ser tomado como true o false. (cosas raras que pueden pasar)

/*El unknown type nos indica que una variable es de un tipo de dato desconocido. Es similar a any,
pero sin quitar el análisis de código estático que nos brinda TypeScript.
El tipo unknown nos fuerza a hacer una verificación de tipo. Esta es la forma que TypeScript
sugiere trabajar con variables de las cuales no sabemos de qué tipo serán.
Así evitamos utilizar constantemente any.*/

let unKnownVar: unknown;  //Permite la asignación dinamica de tipos
unKnownVar = true;
unKnownVar = undefined;
unKnownVar = null;
unKnownVar = 1;
unKnownVar = [];
unKnownVar = {};

if (typeof unKnownVar === "string") {
  unKnownVar.toUpperCase(); //Con unknown, TS te obliga verificar el tipado.
}

/*A diferencia de any, con unknown te va a obligar a verificar el tipo de dato. */
let isNewV2: boolean = unKnownVar;

//Podemos verificar el tipo de dato de la siguiente manera:
if (typeof unKnownVar === "boolean") {
  let isNewV2: boolean = unKnownVar;
}

/*También podemos emplear unknown en funciones si no sabemos exactamente que nos va a devolver.*/
const parse = (str: string): unknown => {
  return JSON.parse(str);
};

