import {Product} from "./products/product-model";
export interface Response {
  status: number,
  response: string,
  dataResponse?: Product,
  newId?: string | number,
}
