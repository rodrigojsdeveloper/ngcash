import { Express } from "express"
import { accountRoutes } from "./account/account.routes"
import { sessionRoutes } from "./session/session.routes"
import { transactionsRoutes } from "./transactions/transactions.routes"
import { usersRoutes } from "./users/users.routes"


const appRoutes = (app: Express) => {

    app.use('/users', usersRoutes())
    app.use('/transactions', transactionsRoutes())
    app.use('/session', sessionRoutes())
    app.use('/account', accountRoutes())
}

export { appRoutes }
