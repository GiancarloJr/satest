import { BaseModel } from "./base.model.js"

export interface Product {
  id?: string
  name?: string
  value?: number
  createdAt?: Date
  updatedAt?: Date
  quantity?: number
  groupId?: number
}

export default class ProductModel extends BaseModel {

  private _name?: string
  private _value?: number
  private _quantity?: number
  private _groupId?: number

  constructor(product: Product) {
    super()
    this._id = product?.id
    this._name = product?.name
    this._value = product?.value
    this._quantity = product?.quantity
    this._groupId = product?.groupId
    this._createdAt = new Date()
    this._updatedAt = product?.updatedAt
  }

  get Id(): string {
    return this._id ?? ''
  }

  set Id(value: string) {
    this._id = value
  }

  get value(): number {
    return this._value ?? 0
  }

  set value(value: number) {
    this._value = value
  }

  get quantity(): number {
    return this._quantity ?? 0
  }

  set quantity(value: number) {
    this._quantity = value
  }

  get groupId(): number {
    return this._groupId ?? 0
  }

  set groupId(value: number) {
    this._groupId = value
  }

  get name(): string {
    return this._name ?? ''
  }

  set name(value: string) {
    this._name = value
  }

  get createdAt(): Date {
    return this.createAt ?? new Date()
  }

  set createAt(value: Date) {
    this._createdAt = value
  }

}
