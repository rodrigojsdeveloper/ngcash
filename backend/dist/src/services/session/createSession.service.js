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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionService = void 0;
const data_source_1 = require("../../../../src/data-source");
const users_1 = require("../../../../src/entities/users");
const errors_1 = require("../../../../src/errors");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createSessionService = ({ username, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_1.User);
    const user = yield userRepository.findOneBy({ username });
    if (!user) {
        throw new errors_1.AppError('Invalid credentials', 401);
    }
    const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
    if (!passwordMatch) {
        throw new errors_1.AppError('Invalid credentials', 401);
    }
    const token = jsonwebtoken_1.default.sign({ username }, process.env.SECRET_KEY, { expiresIn: '24h', subject: user.id });
    return { token };
});
exports.createSessionService = createSessionService;
