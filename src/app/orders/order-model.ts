import {BaseModel} from "../base-model";
import {Product} from "./../products/product-model";
import {User, ROLES} from "./../users/user-model";

export interface Order extends BaseModel {
  products: Product[],
  user: User,
}
