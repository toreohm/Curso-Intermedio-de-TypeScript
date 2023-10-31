/*En JavaScript, los parámetros rest nos permiten enviar la cantidad de parámetros que queramos a
una función. Se denotan con ... seguido del nombre con el cual identificaremos a estos parámetros.
En TypeScript, lo único que cambia es el tipado de los parámetros. */

import {User, ROLES} from "./01-enum";

const currentUser: User = {
  userName: "toreohm",
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log("checkAdminRole() ", checkAdminRole());

//Caso de uso pasando un array con los roles

export const checkRoleArray = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

console.log("checkRoleArray() ", checkRoleArray([ROLES.ADMIN, ROLES.SELLER]));

//Caso de uso con rest parameters  👇

export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

console.log("checkRole() ", checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER));
