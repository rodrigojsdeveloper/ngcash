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
exports.specificAccountService = void 0;
const data_source_1 = require("../../../../src/data-source");
const accounts_1 = require("../../../../src/entities/accounts");
const specificAccountService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const accountRepository = data_source_1.AppDataSource.getRepository(accounts_1.Account);
    const account = yield accountRepository.findOneBy({ id });
    return { balance: account.balance };
});
exports.specificAccountService = specificAccountService;