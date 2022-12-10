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
const specificAccount_service_1 = require("../../../../../src/services/accounts/specificAccount.service");
const createUser_service_1 = require("../../../../../src/services/users/createUser.service");
const data_source_1 = require("../../../../../src/data-source");
const mocks_1 = require("../../../../../src/mocks");
describe('Tests for account service', () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then(res => connection = res)
            .catch(err => console.error('Error during Data Source initialization', err));
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield connection.destroy(); }));
    it('Must be able to view a account', () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield (0, createUser_service_1.createUserService)(mocks_1.user);
        const result = yield (0, specificAccount_service_1.specificAccountService)(newUser.accountId);
        expect(result).toHaveProperty('balance');
    }));
});
