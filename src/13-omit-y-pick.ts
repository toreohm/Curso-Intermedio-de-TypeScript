/*Los tipos Omit y Pick en TypeScript son utility types que te permiten crear un nuevo tipo basado en
un tipo existente, pero omitiendo o seleccionando algunas de las propiedades del tipo original. */

/*Omit en TypeScript */

interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Omit` para omitir ciertas propiedades de la interfaz User
type UserWithoutContact = Omit<User, 'email' | 'phoneNumber'>; // 👈 Nuevo tipo

// `UserWithoutContact` es ahora un tipo con las propiedades `id` y `name`, pero sin `email` ni `phoneNumber`.

let aUser: UserWithoutContact = {
  id: 1,
  name: 'Carlos Araujo',
};

console.log(aUser); // { id: 1, name: 'Carlos Araujo' }
/*En este caso, hemos usado Omit para excluir las propiedades email y phoneNumber de la interfaz User.
Por lo tanto, el nuevo tipo UserWithoutContact solo tiene las propiedades id y name. */

//------------------------------------------------------------------------------------------
//Lo mismo pero con INTERFACES

interface UserChild extends Omit<User, 'email' | 'phoneNumber'> {

}

let aUser2: UserChild = {
  id: 2,
  name: 'Samuel Sanchez',
};

console.log(aUser2); //{ id: 2, name: 'Samuel Sanchez' }


//-----------------------------------------------------------------------------------


/*Pick en TypeScript */
/*Empleamos la siguiente expresión para definir un Pick: Pick<T, K>. Con esto producimos un nuevo
tipo que solo tiene las propiedades de T que se especifican en K. Veamos ejemplo en código: */

interface User2 {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

// Usando `Pick` para seleccionar ciertas propiedades de User
type UserContactInfo = Pick<User2, 'email' | 'phoneNumber'>;

// `UserContactInfo` es ahora un tipo con solo las propiedades `email` y `phoneNumber`

let contactInfo: UserContactInfo = {
  email: "user@email.com",
  phoneNumber: "653-951-802"
};

console.log(contactInfo); // { email: "user@email.com", phoneNumber: "653-951-802" }

/*En este caso, hemos empleado Pick para seleccionar las propiedades email y phoneNumber de la interfaz User.
 Por lo tanto, el nuevo tipo UserContactInfo solo tiene los atributos email y phoneNumber. */

//-------------------------------------------------------------------
//Con INTERFACES

interface userChild2 extends Pick<User2, 'email' | 'phoneNumber'> {

}

let contactInfo2: UserContactInfo = {
  email: "user@email.com",
  phoneNumber: "653-951-8022222"
};

console.log(contactInfo2);
