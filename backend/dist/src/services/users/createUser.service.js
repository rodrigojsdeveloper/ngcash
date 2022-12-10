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
exports.createUserService = void 0;
const data_source_1 = require("../../../../src/data-source");
const accounts_1 = require("../../../../src/entities/accounts");
const users_1 = require("../../../../src/entities/users");
const errors_1 = require("../../../../src/errors");
const bcrypt_1 = require("bcrypt");
const createUserService = ({ username, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.User);
    const accountRepository = data_source_1.AppDataSource.getRepository(accounts_1.Account);
    const account = new accounts_1.Account();
    account.balance = 100;
    const newAccount = accountRepository.create(account);
    yield accountRepository.save(newAccount);
    if (yield userRepository.findOneBy({ username })) {
        throw new errors_1.AppError('Username already exists');
    }
    const passwordHashed = yield (0, bcrypt_1.hash)(password, 10);
    const user = new users_1.User();
    user.username = username;
    user.password = passwordHashed;
    user.accountId = newAccount;
    userRepository.create(user);
    yield userRepository.save(user);
    const newUser = {
        username: user.username,
        password: user.password,
        accountId: newAccount.id
    };
    return newUser;
});
exports.createUserService = createUserService;
