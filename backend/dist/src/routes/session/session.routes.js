"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
const express_1 = require("express");
const createSession_controller_1 = require("../../../../src/controllers/session/createSession.controller");
const routes = (0, express_1.Router)();
const sessionRoutes = () => {
    routes.post('', createSession_controller_1.createSessionController);
    return routes;
};
exports.sessionRoutes = sessionRoutes;
