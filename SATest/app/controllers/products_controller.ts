
import ProductService from '#services/product_service';
import { inject } from '@adonisjs/core';
import BaseController from './base.controller.js';

@inject()
export default class ProductsController extends BaseController {

  constructor(protected productService: ProductService) {
    super();
  }

}
