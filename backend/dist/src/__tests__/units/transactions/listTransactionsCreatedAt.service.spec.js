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
const listTransactionsCreatedAt_service_1 = require("../../../../../src/services/transactions/listTransactionsCreatedAt.service");
const createUser_service_1 = require("../../../../../src/services/users/createUser.service");
const data_source_1 = require("../../../../../src/data-source");
const mocks_1 = require("../../../../../src/mocks");
describe('Tests for transaction service', () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then(res => connection = res)
            .catch(err => console.error('Error during Data Source initialization', err));
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield connection.destroy(); }));
    it('Must be able to list transactions date', () => __awaiter(void 0, void 0, void 0, function* () {
        const date = new Date();
        const day = String(date.getDate() - 1).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        const newUser = yield (0, createUser_service_1.createUserService)(mocks_1.user);
        const result = yield (0, listTransactionsCreatedAt_service_1.listTransactionsCreatedAtService)(newUser.accountId, formattedDate);
        expect(result).toHaveProperty('map');
    }));
});
