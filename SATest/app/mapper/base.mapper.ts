import { BaseEntity } from "../entities/base.entity.js";
import { BaseModel } from "../model/base.model.js";

export interface BaseMapper<T extends BaseEntity, M extends BaseModel> {

  toModel(_entity: T | undefined): M | undefined

  toEntity(_model: M | undefined): T | undefined
}
