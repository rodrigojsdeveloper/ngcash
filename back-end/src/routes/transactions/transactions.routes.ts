import { Router } from 'express'

import { listTransactionsKeywordController } from '../../controllers/transactions/listTransactionsKeyword.controller'
import { createTransactionController } from '../../controllers/transactions/createTransaction.controller'
import { listTransactionsController } from '../../controllers/transactions/listTransactions.controller'

import { tokenMiddleware } from '../../middlewares/token.middleware'
import { userNotFoundMiddleware } from '../../middlewares/userNotFound.middleware'


const routes = Router()

const transactionsRoutes = () => {

    routes.post('',  tokenMiddleware, userNotFoundMiddleware, createTransactionController)
    routes.get('', tokenMiddleware, listTransactionsController)
    routes.get('/:value', tokenMiddleware, listTransactionsKeywordController)

    return routes
}

export { transactionsRoutes }
