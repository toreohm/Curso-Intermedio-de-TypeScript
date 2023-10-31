/*En TypeScript, la herencia en interfaces permite crear una interfaz nueva basada en otra interfaz
existente, heredando sus propiedades y métodos.
Utilizamos la palabra clave extends para aplicar la herencia en interfaces.*/

interface Animal {
  nombre: string,
  comer(): void,
}

interface Mascota extends Animal { // 👈 Herencia de interfaces
// Hereda la propiedad `nombre` y el método `comer()` de la interfaz `Animal`
  jugar(): void,
}

/* La clase Perro implementa la interfaz Mascota, por lo que no solo debe implementar el método jugar(),
 sino también el atributo nombre y el método comer() que fueron heredados de la interfaz Animal en la
 interfaz Mascota. */
class Perro implements Mascota {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  comer() {
    console.log(this.nombre + " está comiendo.");
  }

  jugar() {
    console.log(this.nombre + " está jugando.");
  }
}

const miPerro = new Perro("Firulais");
miPerro.comer(); // "Firulais está comiendo."
miPerro.jugar(); // "Firulais está jugando."
