import { BaseEntity } from "./base.entity.js"


export default class ProductEntity extends BaseEntity {

  public name?: string
  public value?: number
  public quantity?: number
  public groupId?: number;

}
