import { Router } from 'express'

import { specificAccountController } from '../../controllers/accounts/specificAccount.controller'

import { itsYourOwnBalanceMiddleware } from '../../middlewares/itsYourOwnBalance.middleware'
import { tokenMiddleware } from '../../middlewares/token.middleware'


const routes = Router()

const accountRoutes = () => {

    routes.get('/:id', tokenMiddleware, itsYourOwnBalanceMiddleware, specificAccountController)

    return routes
}

export { accountRoutes }
