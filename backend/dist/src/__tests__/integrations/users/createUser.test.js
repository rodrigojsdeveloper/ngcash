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
const data_source_1 = require("../../../../../src/data-source");
const mocks_1 = require("../../../../../src/mocks");
const app_1 = require("../../../../../src/app");
const supertest_1 = __importDefault(require("supertest"));
describe('Tests for user routes', () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then(res => connection = res)
            .catch(err => console.error('Error during Data Source initialization', err));
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield connection.destroy(); }));
    test('Must be able to create a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.app).post('/users').send(mocks_1.user);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('username');
        expect(response.body).toHaveProperty('password');
        expect(response.body).toHaveProperty('accountId');
    }));
    test('Must be able to prevent user creation for having less than 3 characters in username', () => __awaiter(void 0, void 0, void 0, function* () {
        mocks_1.user.username = 'ex';
        const response = yield (0, supertest_1.default)(app_1.app).post('/users').send(mocks_1.user);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    }));
    test('Must be able to prevent user creation for having less than 8 characters in the password', () => __awaiter(void 0, void 0, void 0, function* () {
        mocks_1.user.password = 'ex';
        const response = yield (0, supertest_1.default)(app_1.app).post('/users').send(mocks_1.user);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    }));
    test('Must be able to prevent user creation from not having capital letters in password', () => __awaiter(void 0, void 0, void 0, function* () {
        mocks_1.user.password = 'example123';
        const response = yield (0, supertest_1.default)(app_1.app).post('/users').send(mocks_1.user);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    }));
    test('Must be able to prevent user creation from not having numbers in password', () => __awaiter(void 0, void 0, void 0, function* () {
        mocks_1.user.password = 'EXAMPLEexample';
        const response = yield (0, supertest_1.default)(app_1.app).post('/users').send(mocks_1.user);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    }));
});
