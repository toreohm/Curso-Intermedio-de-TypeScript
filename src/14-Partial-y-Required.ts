/*Los tipos Partial y Required en TypeScript son utility types que te permiten crear un nuevo tipo
basado en un tipo existente, pero haciendo que todas las propiedades de ese tipo sean opcionales u
obligatorias.*/

//Partial type en TypeScript
/*Utilizamos la siguiente expresión para definir un Partial type: Partial<T>.
Esto genera un nuevo tipo que tiene todas las propiedades de T (Interfaz), pero cada atributo es opcional.
Veamos un ejemplo: */
 {
  interface User {
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
  }

  // Usando `Partial` para hacer todas las propiedades de User opcionales
  type PartialUser = Partial<User>;

  // `PartialUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es opcional.

  let partialUser: PartialUser = {
    id: 1,
    name: 'Benjamin Hernández',
    // Podemos omitir `email` y `phoneNumber` ya que son opcionales en `PartialUser`
  };

  console.log(partialUser); // { id: 1, name: 'Benjamin Hernández' }
  /*Hemos usado Partial para hacer que todas las propiedades de User sean opcionales.
  Por lo tanto, el nuevo tipo PartialUser tiene las propiedades id, name, email y phoneNumber,
  pero todas ellas son opcionales. */
 }

//Required type en TypeScript
/*Empleamos la siguiente expresión para definir un Required type: Required<T>.
Esto genera un nuevo tipo que tiene todas las propiedades de T, pero cada atributo es obligatoria.
Veamos un ejemplo: */

{
  interface User {
    id: number;
    name: string;
    email?: string;
    phoneNumber?: string;
  }

  // Usando `Required` para hacer todas las propiedades de User obligatorias
  type RequiredUser = Required<User>;

  // `RequiredUser` es ahora un tipo con todas las propiedades de `User`, pero cada una de ellas es obligatoria.

  let requiredUser: RequiredUser = {
    id: 1,
    name: 'Fatima Fernández',
    email: 'fatima@email.com',
    phoneNumber: '343-545-789'
    // No podemos omitir `email` y `phoneNumber` ya que son obligatorias en `RequiredUser`
  };

  console.log(requiredUser); // { id: 1, name: 'Fatima Fernández', email: 'fatima@email.com', phoneNumber: '343-545-789' }

  /*Hemos empleado Required para hacer que todas las propiedades de User sean obligatorias.
  Por lo tanto, el nuevo tipo RequiredUser tiene las propiedades id, name, email y phoneNumber,
  pero todas ellas son obligatorias. */
}

