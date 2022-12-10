"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionsRoutes = void 0;
const express_1 = require("express");
const listTransactionsCreatedAt_controller_1 = require("../../../../src/controllers/transactions/listTransactionsCreatedAt.controller");
const listTransactionsCashOut_controller_1 = require("../../../../src/controllers/transactions/listTransactionsCashOut.controller");
const listTransactionsCashIn_controller_1 = require("../../../../src/controllers/transactions/listTransactionsCashIn.controller");
const createTransaction_controller_1 = require("../../../../src/controllers/transactions/createTransaction.controller");
const listTransactions_controller_1 = require("../../../../src/controllers/transactions/listTransactions.controller");
const schemaValidation_middleware_1 = require("../../../../src/middlewares/schemaValidation.middleware");
const token_middleware_1 = require("../../../../src/middlewares/token.middleware");
const transaction_schema_1 = require("../../../../src/schemas/transaction.schema");
const routes = (0, express_1.Router)();
const transactionsRoutes = () => {
    routes.post('', (0, schemaValidation_middleware_1.schemaValidationMiddleware)(transaction_schema_1.transactionSchema), token_middleware_1.tokenMiddleware, createTransaction_controller_1.createTransactionController);
    routes.get('', token_middleware_1.tokenMiddleware, listTransactions_controller_1.listTransactionsController);
    routes.get('/cash-in', token_middleware_1.tokenMiddleware, listTransactionsCashIn_controller_1.listTransactionsCashInController);
    routes.get('/cash-out', token_middleware_1.tokenMiddleware, listTransactionsCashOut_controller_1.listTransactionsCashOutController);
    routes.get('/:date', token_middleware_1.tokenMiddleware, listTransactionsCreatedAt_controller_1.listTransactionsCreatedAtController);
    return routes;
};
exports.transactionsRoutes = transactionsRoutes;
