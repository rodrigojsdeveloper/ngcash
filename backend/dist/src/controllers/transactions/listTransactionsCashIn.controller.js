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
exports.listTransactionsCashInController = void 0;
const listTransactionsCashIn_service_1 = require("../../../../src/services/transactions/listTransactionsCashIn.service");
const data_source_1 = require("../../../../src/data-source");
const users_1 = require("../../../../src/entities/users");
const listTransactionsCashInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.username;
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.User);
    const user = yield userRepository.findOneBy({ username });
    const listCashIn = yield (0, listTransactionsCashIn_service_1.listTransactionsCashInService)(user.accountId.id);
    return res.json(listCashIn);
});
exports.listTransactionsCashInController = listTransactionsCashInController;
