import { Router } from 'express'

import { listTransactionsCashInController } from '../../controllers/transactions/listTransactionsCashIn.controller'
import { listTransactionsCashOutController } from '../../controllers/transactions/listTransactionsCashOut.controller'
import { createTransactionController } from '../../controllers/transactions/createTransaction.controller'
import { listTransactionsController } from '../../controllers/transactions/listTransactions.controller'

import { tokenMiddleware } from '../../middlewares/token.middleware'
import { userNotFoundMiddleware } from '../../middlewares/userNotFound.middleware'


const routes = Router()

const transactionsRoutes = () => {

    routes.post('',  tokenMiddleware, userNotFoundMiddleware, createTransactionController)

    routes.get('', tokenMiddleware, listTransactionsController)
    
    routes.get('/cash-in', tokenMiddleware, listTransactionsCashInController)

    routes.get('/cash-out', tokenMiddleware, listTransactionsCashOutController)

    return routes
}

export { transactionsRoutes }
