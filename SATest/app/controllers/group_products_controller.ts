/* eslint-disable @typescript-eslint/no-unused-vars */
import GroupProductService from '#services/group_products_service';
import { inject } from '@adonisjs/core';
import BaseController from './base.controller.js';
import GroupProductModel from '../model/groupProduct.model.js';
import { HttpContext } from '@adonisjs/core/http';
import HttpNotFoundException from '#exceptions/NotFoundException';

@inject()
export default class GroupProductsController extends BaseController<GroupProductModel> {

  constructor(protected groupService: GroupProductService) {
    super();
  }

  override async index(): Promise<GroupProductModel[]> {
    return this.groupService.getAll()
  }

  override async store({ request }: HttpContext): Promise<GroupProductModel | undefined> {
    const body = request.body()
    const model = new GroupProductModel({
      name: body.name,
      quantityTotal: body.quantityTotal
    })
    return this.groupService.create(model)
  }

  override async show({ request }: HttpContext): Promise<GroupProductModel | undefined> {
    const params = request.params()

    const data = await this.groupService.getById(params.id)

    if (!data) {
      throw new HttpNotFoundException('GroupProduct Not Found')
    }

    return data
  }

}
