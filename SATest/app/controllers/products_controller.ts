
import ProductService from '#services/product_service';
import { inject } from '@adonisjs/core';
import BaseController from './base.controller.js';
import ProductModel from '../model/products.model.js';
import { HttpContext } from '@adonisjs/core/http';

@inject()
export default class ProductsController extends BaseController<ProductModel> {

  constructor(protected productService: ProductService) {
    super();
  }

  // eslint-disable-next-line no-empty-pattern
  override async index({ }: HttpContext): Promise<ProductModel[]> {
    console.log(this.productService)
    return this.productService.getAll()
  }

}
