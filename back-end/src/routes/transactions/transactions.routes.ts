import { Router } from 'express'

import { listTransactionsCreatedAtController } from '../../controllers/transactions/listTransactionsCreatedAt.controller'
import { listTransactionsCashOutController } from '../../controllers/transactions/listTransactionsCashOut.controller'
import { listTransactionsCashInController } from '../../controllers/transactions/listTransactionsCashIn.controller'
import { createTransactionController } from '../../controllers/transactions/createTransaction.controller'
import { listTransactionsController } from '../../controllers/transactions/listTransactions.controller'

import { userNotFoundMiddleware } from '../../middlewares/userNotFound.middleware'
import { tokenMiddleware } from '../../middlewares/token.middleware'


const routes = Router()

const transactionsRoutes = () => {

    routes.post('',  tokenMiddleware, userNotFoundMiddleware, createTransactionController)

    routes.get('', tokenMiddleware, listTransactionsController)
    
    routes.get('/cash-in', tokenMiddleware, listTransactionsCashInController)

    routes.get('/cash-out', tokenMiddleware, listTransactionsCashOutController)

    routes.get('/:date', tokenMiddleware, listTransactionsCreatedAtController)

    return routes
}

export { transactionsRoutes }
