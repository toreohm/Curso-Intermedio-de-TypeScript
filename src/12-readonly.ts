/*Las propiedades de solo lectura son atributos de un objeto que solo pueden ser asignadas durante la
creación del mismo y no pueden ser cambiados después. Esto asegura que el valor de la propiedad se
mantenga constante y no pueda ser cambiado de forma accidental o intencional.
En TypeScript, las propiedades de solo lectura las declaramos con la palabra clave readonly. */

class Persona {
  // SOLO LECTURA 👀
readonly nombre: string;
readonly edad: number;
  // ---

constructor(nombre: string, edad: number) {
  this.nombre = nombre;
  this.edad = edad;
}

saludar() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}
}

const persona = new Persona("Freddy", 35);
persona.saludar(); // ✅"Hola, mi nombre es Freddy y tengo 35 años."

persona.nombre = "Pepe"; // ⛔Error: La propiedad 'nombre' solo se puede leer
persona.edad = 42; // ⛔Error: La propiedad 'edad' solo se puede leer
