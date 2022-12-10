"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itsYourOwnBalanceMiddleware = void 0;
const data_source_1 = require("../../../src/data-source");
const accounts_1 = require("../../../src/entities/accounts");
const users_1 = require("../../../src/entities/users");
const itsYourOwnBalanceMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const username = req.username;
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.User);
    const accountRepository = data_source_1.AppDataSource.getRepository(accounts_1.Account);
    const user = yield userRepository.findOneBy({ username });
    const account_token = yield accountRepository.findOneBy({ id: user.accountId.id });
    const account_id = yield accountRepository.findOneBy({ id });
    if ((account_token === null || account_token === void 0 ? void 0 : account_token.id) != (account_id === null || account_id === void 0 ? void 0 : account_id.id)) {
        return res.status(403).json({ message: 'Only the user can see the balance' });
    }
    next();
});
exports.itsYourOwnBalanceMiddleware = itsYourOwnBalanceMiddleware;
