import { BaseEntity } from "../entities/base.entity.js"
import { BaseMapper } from "../mapper/base.mapper.js"
import { BaseModel } from "../model/base.model.js"
import { uuid } from "uuidv4"

export default class BaseRepository<T extends BaseEntity, M extends BaseModel, MP extends BaseMapper<T, M>> {

  protected _mapper: MP

  constructor(private readonly db: Array<T>, mapper: new () => MP) {
    this._mapper = new mapper()
  }

  async getById(id: string): Promise<M | undefined> {

    const entity = this.db.find(item => item.id == id)
    console.log(this.db)
    return this._mapper.toModel(entity)
  }

  async getAll(): Promise<M[]> {
    const data = this.db.map(this._mapper.toModel)

    return Promise.resolve(data.filter(item => !!item))
  }

  async create(model: M): Promise<M | undefined> {
    if (!model) return undefined
    const entity = this._mapper.toEntity(model)

    entity!.id = uuid()
    this.db.push(entity!)
    return model
  }

}
