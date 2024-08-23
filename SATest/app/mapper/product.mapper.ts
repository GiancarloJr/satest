import ProductEntity from "../entities/products.entity.js";
import ProductModel from "../model/products.model.js";
import { BaseMapper } from "./base.mapper.js";

export class ProductMapper implements BaseMapper<ProductEntity, ProductModel> {


  toModel(entity: ProductEntity): ProductModel | undefined {
    if (!entity) return undefined
    return new ProductModel({
      id: entity.id,
      name: entity.name,
      value: entity.value,
      quantity: entity.quantity,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    })
  }
  toEntity(model: ProductModel): ProductEntity | undefined {
    if (!model) return undefined

    const entity = new ProductEntity()

    entity.id = model.Id
    entity.name = model.name
    entity.quantity = model.quantity
    entity.value = model.value
    entity.createdAt = model._createdAt
    entity.updatedAt = model._updatedAt

    return entity
  }

}
