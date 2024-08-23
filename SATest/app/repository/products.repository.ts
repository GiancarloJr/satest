import { inject } from "@adonisjs/core";
import ProductEntity from "../entities/products.entity.js";
import BaseRepository from "./base.repository.js";
import { ProductMapper } from "../mapper/product.mapper.js";
import ProductModel from "../model/products.model.js";

@inject()
export default class ProductRepository extends BaseRepository<ProductEntity, ProductModel, ProductMapper> {


}
