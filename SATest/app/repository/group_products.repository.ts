import BaseRepository from "./base.repository.js";
import GroupProductEntity from "../entities/groupProduct.entity.js";
import { inject } from "@adonisjs/core";
import { GroupProductMapper } from "../mapper/group_product.mapper.js";
import GroupProductModel from "../model/groupProduct.model.js";

@inject()
export default class GroupProductRepository extends BaseRepository<GroupProductEntity, GroupProductModel, GroupProductMapper> {


}
