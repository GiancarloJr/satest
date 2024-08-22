/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProductsController from '#controllers/products_controller'
import GroupProductsController from '../app/controllers/group_products_controller.js'
import router from '@adonisjs/core/services/router'


router.resource('product-group', GroupProductsController).apiOnly()

router.resource('/product-group/:idgp/product', ProductsController).apiOnly()
