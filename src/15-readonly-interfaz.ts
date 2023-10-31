/*El tipo Readonly en TypeScript es un utility type que te permite crear un nuevo tipo basado en un
otro existente, pero haciendo que todas las propiedades de ese tipo sean de solo lectura. */

/*Utilizamos la siguiente expresión para definir un Readonly type: Readonly<T>.
Esto genera un nuevo tipo que tiene todas las propiedades de T, pero cada propiedad es de solo lectura,
lo que significa que una vez que se asigna un valor a la propiedad, no puede ser cambiado.
Veamos un ejemplo: */

{
  interface User {
    id: number;
    name: string;
    email: string;
  }

  // Usando `Readonly` para hacer todas las propiedades de User de solo lectura
  type ReadonlyUser = Readonly<User>;

  // `ReadonlyUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es de solo lectura.

  let readonlyUser: ReadonlyUser = {
    id: 1,
    name: 'Rosa López',
    email: 'rosa@email.com'
  };

  console.log(readonlyUser); // { id: 1, name: 'Rosa López', email: 'rosa@email.com' }

  // Tratar de cambiar una propiedad lanzaría un error
  // readonlyUser.name = 'Jennifer Rodríguez'; // ⛔Error
}
/*Conclusión: El nuevo tipo ReadonlyUser tiene las propiedades id, name y email, pero todas ellas son
de solo lectura y no pueden ser cambiadas después de la asignación inicial.*/
