"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require('dotenv').config();
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === 'test' ?
    {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: ['src/entities/**/*.ts'],
    }
    :
        {
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            logging: true,
            synchronize: true,
            entities: ['src/entities/**/*.ts'],
            migrations: ['src/migrations/*.ts'],
        });
exports.AppDataSource = AppDataSource;
