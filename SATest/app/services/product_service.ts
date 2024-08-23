import { inject } from "@adonisjs/core";
import ProductEntity from "../entities/products.entity.js";
import ProductModel from "../model/products.model.js";
import ProductRepository from "../repository/products.repository.js";
import BaseService from "./base_service.js";
import { ProductMapper } from "../mapper/product.mapper.js";

@inject()
export default class ProductService extends BaseService<ProductModel, ProductEntity, ProductMapper> {

  constructor(repo: ProductRepository) {
    super(repo)
  }
}
