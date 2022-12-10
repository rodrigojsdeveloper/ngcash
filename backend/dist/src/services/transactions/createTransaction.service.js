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
exports.createTransactionService = void 0;
const transactions_1 = require("../../../../src/entities/transactions");
const data_source_1 = require("../../../../src/data-source");
const accounts_1 = require("../../../../src/entities/accounts");
const users_1 = require("../../../../src/entities/users");
const errors_1 = require("../../../../src/errors");
const createTransactionService = (debitedId, { value, username }) => __awaiter(void 0, void 0, void 0, function* () {
    const transactionsRepository = data_source_1.AppDataSource.getRepository(transactions_1.Transaction);
    const accountRepository = data_source_1.AppDataSource.getRepository(accounts_1.Account);
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.User);
    const user = yield userRepository.findOneBy({ username });
    if (!user) {
        throw new errors_1.AppError('User not found', 404);
    }
    const accountDebited = yield accountRepository.findOneBy({ id: debitedId });
    const accountCredited = yield accountRepository.findOneBy({ id: user.accountId.id });
    if ((accountDebited === null || accountDebited === void 0 ? void 0 : accountDebited.id) == (accountCredited === null || accountCredited === void 0 ? void 0 : accountCredited.id)) {
        throw new errors_1.AppError('the user cannot make transactions for himself', 401);
    }
    if (value > Number(accountDebited === null || accountDebited === void 0 ? void 0 : accountDebited.balance)) {
        throw new errors_1.AppError('insufficient debt');
    }
    accountCredited.balance = accountCredited.balance + value;
    accountDebited.balance = accountDebited.balance - value;
    yield accountRepository.save(accountCredited);
    yield accountRepository.save(accountDebited);
    const transaction = new transactions_1.Transaction();
    transaction.creditedAccountId = accountCredited.id;
    transaction.debitedAccountId = debitedId;
    transaction.value = value;
    transactionsRepository.create(transaction);
    yield transactionsRepository.save(transaction);
    return transaction;
});
exports.createTransactionService = createTransactionService;
