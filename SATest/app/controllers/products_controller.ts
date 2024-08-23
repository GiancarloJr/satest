
import ProductService from '#services/product_service';
import { inject } from '@adonisjs/core';
import BaseController from './base.controller.js';
import ProductModel from '../model/products.model.js';
import { HttpContext } from '@adonisjs/core/http';
import HttpNotFoundException from '#exceptions/NotFoundException';

@inject()
export default class ProductsController extends BaseController<ProductModel> {

  constructor(protected productService: ProductService) {
    super();
  }

  override async index(): Promise<ProductModel[]> {
    return this.productService.getAll()
  }

  override async store({ request }: HttpContext): Promise<ProductModel | undefined> {
    const body = request.body()
    const model = new ProductModel({
      name: body.name,
      quantity: body.quantity,
      value: body.value,
      groupId: body.groupId
    })
    return this.productService.create(model)
  }

  override async show({ request }: HttpContext): Promise<ProductModel | undefined> {
    const params = request.params()

    const data = await this.productService.getById(params.id)

    if (!data) {
      throw new HttpNotFoundException('Product Not Found')
    }

    return data
  }

}
