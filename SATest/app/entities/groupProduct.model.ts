import { BaseModel } from "./base.model.js"

export interface GroupProduct {
  id?: string
  name?: string
  quantityTotal?: number
  createdAt?: Date
  updatedAt?: Date
}

export default class GroupProductModel extends BaseModel {

  private _name?: string
  private _quantityTotal?: number

  constructor(group: GroupProduct) {
    super()
    this._id = group?.id
    this._name = group?.name
    this._createdAt = new Date()
    this._updatedAt = group?.updatedAt
    this._quantityTotal = group?.quantityTotal
  }

  get Id(): string {
    return this._id ?? ''
  }

  set Id(value: string) {
    this._id = value
  }

  get name(): string {
    return this._name ?? ''
  }

  set name(value: string) {
    this._name = value
  }

  get quantityTotal(): number {
    return this._quantityTotal ?? 0
  }

  set quantityTotal(value: number) {
    this._quantityTotal = value
  }

  get createdAt(): Date {
    return this.createAt ?? new Date()
  }

  set createAt(value: Date) {
    this._createdAt = value
  }

}
