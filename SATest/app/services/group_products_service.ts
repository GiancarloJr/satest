
import { inject } from "@adonisjs/core";
import GroupProductEntity from "../entities/groupProduct.entity.js";
import GroupProductModel from "../model/groupProduct.model.js";
import BaseService from "./base_service.js";
import GroupProductRepository from "../repository/group_products.repository.js";
import { GroupProductMapper } from "../mapper/group_product.mapper.js";

@inject()
export default class GroupProductService extends BaseService<GroupProductModel, GroupProductEntity, GroupProductMapper> {

  constructor(repo: GroupProductRepository) {
    super(repo)
  }

}
