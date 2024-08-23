import { inject } from "@adonisjs/core"
import { BaseModel } from "../model/base.model.js"
import BaseRepository from "../repository/base.repository.js"
import { BaseEntity } from "../entities/base.entity.js";
import { BaseMapper } from "../mapper/base.mapper.js";

@inject()
export default class BaseService<T extends BaseModel, E extends BaseEntity, MP extends BaseMapper<E, T>> {

  constructor(private repo: BaseRepository<E, T, MP>) {
  }

  async getById(id: string): Promise<T | undefined> {

    const entity = this.repo.getById(id)
    return entity
  }

  async getAll(): Promise<T[]> {
    return this.repo.getAll()
  }


  async create(model: T): Promise<T | undefined> {
    if (model._id) {
      throw Error('Error id')
    }

    return this.repo.create(model)
  }

}
