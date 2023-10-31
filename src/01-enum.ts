/*Un enum es un tipo de dato que nos permite crear un set de opciones.
Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.

1)Los declaramos usando la palabra reservada enum seguido del nombre que tendrá éste.
2)Entre llaves estarán los datos llave-valor.
3)Se recomienda que el nombre del enum y de las llaves dentro del mismo estén en mayúscula.

La ventaja que nos da esto es que disponemos de una lista de valores predeterminados que
podemos asignar a una variable o a un atributo de la misma. Por tanto, no podemos asignar
otro valor que no este dentro de las opciones que nos brinde el enum.

En conclusión, un enum nos ayuda a no equivocarnos cuando asignemos valores a una variable
reduciendo las posibilidades de asignación a una lista de opciones predefinidas.
P.D Enums come in two flavors string and numeric.*/

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
};

export type User = {
  userName: string,
  role: ROLES,
  opcional?: boolean,
};

const toreoUser: User = {
  userName: "toreohm",
  role: ROLES.ADMIN,
};

console.table(toreoUser);

//Otro ejemplo
 enum SIZES {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L',
  EXTRA_LARGE = 'XL',
};

const playera: object = {
  tipo:'polo',
  Size: SIZES.EXTRA_LARGE,
};

console.table(playera);
