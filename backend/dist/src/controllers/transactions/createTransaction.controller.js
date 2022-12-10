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
exports.createTransactionController = void 0;
const createTransaction_service_1 = require("../../../../src/services/transactions/createTransaction.service");
const data_source_1 = require("../../../../src/data-source");
const accounts_1 = require("../../../../src/entities/accounts");
const users_1 = require("../../../../src/entities/users");
const createTransactionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usernameDebt = req.username;
    const data = req.body;
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.User);
    const accountRepository = data_source_1.AppDataSource.getRepository(accounts_1.Account);
    const user_debited_id = yield userRepository.findOneBy({ username: usernameDebt });
    const debited_id = yield accountRepository.findOneBy({ id: user_debited_id.accountId.id });
    const newTransaction = yield (0, createTransaction_service_1.createTransactionService)(debited_id.id, data);
    return res.status(201).json(newTransaction);
});
exports.createTransactionController = createTransactionController;
