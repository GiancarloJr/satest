/* eslint-disable @typescript-eslint/no-unused-vars */
import GroupProductService from '#services/group_products_service';
import { inject } from '@adonisjs/core';
import BaseController from './base.controller.js';

@inject()
export default class GroupProductsController extends BaseController {

  constructor(protected groupService: GroupProductService) {
    super();
  }

}
