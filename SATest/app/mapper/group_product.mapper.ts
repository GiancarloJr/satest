import GroupProductEntity from "../entities/groupProduct.entity.js";
import GroupProductModel from "../model/groupProduct.model.js";
import { BaseMapper } from "./base.mapper.js";

export class GroupProductMapper implements BaseMapper<GroupProductEntity, GroupProductModel> {


  toModel(entity: GroupProductEntity): GroupProductModel | undefined {
    if (!entity) return undefined

    return new GroupProductModel({
      id: entity.id,
      name: entity.name,
      quantityTotal: entity.quantityTotal,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    })
  }
  toEntity(model: GroupProductModel): GroupProductEntity | undefined {

    if (!model) return undefined

    const entity = new GroupProductEntity()

    entity.id = model.Id
    entity.name = model.name
    entity.quantityTotal = model.quantityTotal
    entity.createdAt = model._createdAt
    entity.updatedAt = model._updatedAt

    return entity
  }

}
