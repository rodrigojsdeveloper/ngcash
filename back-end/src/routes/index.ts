import { transactionsRoutes } from './transactions/transactions.routes'
import { accountRoutes } from './account/account.routes'
import { sessionRoutes } from './session/session.routes'
import { usersRoutes } from './users/users.routes'
import { Express } from 'express'


const appRoutes = (app: Express) => {

    app.use('/users', usersRoutes())
    app.use('/transactions', transactionsRoutes())
    app.use('/session', sessionRoutes())
    app.use('/accounts', accountRoutes())
}

export { appRoutes }
