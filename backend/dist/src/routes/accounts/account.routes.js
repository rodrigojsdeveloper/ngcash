"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRoutes = void 0;
const express_1 = require("express");
const specificAccount_controller_1 = require("../../../../src/controllers/accounts/specificAccount.controller");
const itsYourOwnBalance_middleware_1 = require("../../../../src/middlewares/itsYourOwnBalance.middleware");
const token_middleware_1 = require("../../../../src/middlewares/token.middleware");
const routes = (0, express_1.Router)();
const accountRoutes = () => {
    routes.get('/:id', token_middleware_1.tokenMiddleware, itsYourOwnBalance_middleware_1.itsYourOwnBalanceMiddleware, specificAccount_controller_1.specificAccountController);
    return routes;
};
exports.accountRoutes = accountRoutes;
