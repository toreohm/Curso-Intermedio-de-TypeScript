import {BaseModel} from "../base-model";

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export interface User extends BaseModel {
  userName: string,
  role: ROLES,
  opcional?: boolean,
}
