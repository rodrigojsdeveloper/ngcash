"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const viewProfile_controller_1 = require("../../../../src/controllers/users/viewProfile.controller");
const createUser_controller_1 = require("../../../../src/controllers/users/createUser.controller");
const schemaValidation_middleware_1 = require("../../../../src/middlewares/schemaValidation.middleware");
const token_middleware_1 = require("../../../../src/middlewares/token.middleware");
const user_schema_1 = require("../../../../src/schemas/user.schema");
const routes = (0, express_1.Router)();
const usersRoutes = () => {
    routes.post('', (0, schemaValidation_middleware_1.schemaValidationMiddleware)(user_schema_1.userSchema), createUser_controller_1.createUserController);
    routes.get('/profile', token_middleware_1.tokenMiddleware, viewProfile_controller_1.viewProfileController);
    return routes;
};
exports.usersRoutes = usersRoutes;
