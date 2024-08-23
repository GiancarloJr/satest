import GroupProductEntity from "../app/entities/groupProduct.entity.js"
import ProductEntity from "../app/entities/products.entity.js"

export class State {

  private static instance: State | null

  public products: ProductEntity[] = []
  public groupProducts: GroupProductEntity[] = []

  private constructor() {

  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new State()
    }

    return this.instance
  }

}
