"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const transactions_routes_1 = require("../../../src/routes/transactions/transactions.routes");
const account_routes_1 = require("../../../src/routes/accounts/account.routes");
const session_routes_1 = require("../../../src/routes/session/session.routes");
const users_routes_1 = require("../../../src/routes/users/users.routes");
const appRoutes = (app) => {
    app.use('/users', (0, users_routes_1.usersRoutes)());
    app.use('/session', (0, session_routes_1.sessionRoutes)());
    app.use('/accounts', (0, account_routes_1.accountRoutes)());
    app.use('/transactions', (0, transactions_routes_1.transactionsRoutes)());
};
exports.appRoutes = appRoutes;
