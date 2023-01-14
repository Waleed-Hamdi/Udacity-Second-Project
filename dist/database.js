"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DB_HOST, TEST_DB_NAME, DEV_DB_NAME, DB_USER, DB_PASSWORD, NODE_ENV } = process.env;
const client = new pg_1.Pool({
    host: DB_HOST,
    database: NODE_ENV === 'dev' ? DEV_DB_NAME : TEST_DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
});
exports.default = client;
