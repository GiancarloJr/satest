/*
|--------------------------------------------------------------------------
| HTTP server entrypoint
|--------------------------------------------------------------------------
|
| The "server.ts" file is the entrypoint for starting the AdonisJS HTTP
| server. Either you can run this file directly or use the "serve"
| command to run this file and monitor file changes
|
*/

import 'reflect-metadata'
import { Ignitor, prettyPrintError } from '@adonisjs/core'
import app from '@adonisjs/core/services/app'
import ProductRepository from '../app/repository/products.repository.js'
import { ProductMapper } from '../app/mapper/product.mapper.js'
import GroupProductRepository from '../app/repository/group_products.repository.js'
import { GroupProductMapper } from '../app/mapper/group_product.mapper.js'
import { State } from './state.js'
import GroupProductEntity from '../app/entities/groupProduct.entity.js'


/**
 * URL to the application root. AdonisJS need it to resolve
 * paths to file and directories for scaffolding commands
 */
const APP_ROOT = new URL('../', import.meta.url)

/**
 * The importer is used to import files in context of the
 * application.
 */
const IMPORTER = (filePath: string) => {
  if (filePath.startsWith('./') || filePath.startsWith('../')) {
    return import(new URL(filePath, APP_ROOT).href)
  }
  return import(filePath)
}


new Ignitor(APP_ROOT, { importer: IMPORTER })
  .tap((apphttp) => {
    apphttp.booting(async () => {
      await import('#start/env')
    })
    apphttp.listen('SIGTERM', () => apphttp.terminate())
    apphttp.listenIf(apphttp.managedByPm2, 'SIGINT', () => apphttp.terminate())
  })
  .httpServer()
  .start()
  .then(
    () => {
      app.container.bind(GroupProductRepository, () => {
        return new GroupProductRepository(State.getInstance().groupProducts, GroupProductMapper)
      })
      app.container.bind(ProductRepository, () => {
        return new ProductRepository(State.getInstance().products, ProductMapper)
      })
    }
  )
  .catch((error) => {
    process.exitCode = 1
    prettyPrintError(error)
  })
