/* eslint-disable no-empty-pattern */
import { HttpContext } from "@adonisjs/core/http";
import { BaseModel } from "../model/base.model.js";


export default class BaseController<T extends BaseModel> {

  /**
   * Display a list of resource
   */
  async index({ }: HttpContext): Promise<Array<T>> {
    return []
  }

  /**
   * Handle form submission for the create action
   */
  async store({ }: HttpContext) { }

  /**
   * Show individual record
   */
  async show({ }: HttpContext) { }

}
