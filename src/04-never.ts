/*El never type se usa para funciones que nunca van a terminar o que detienen el programa.
Con esto TypeScript nos ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos
un mensaje de error. */

const withOutEnd = () => {
  while(true) {
    console.log("Nunca pares de aprender");
  }
};

/*Una función también puede ser del tipo never cuando tenemos un throw que lance un error y,
como resultado, haga detener la ejecución.*/

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "Es un string";
  } else if (Array.isArray(input)) {
    return "Es un array";
  }
  return fail("Input desconocido");
};

console.log(example("Un string"));
console.log(example([1,2,3,4]));
console.log(example(1000));
console.log(example("Después del fail"));
