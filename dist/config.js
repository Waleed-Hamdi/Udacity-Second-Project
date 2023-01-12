"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, BCRYT_PASSWORD, SALT_ROUNDS, PORT } = process.env;
exports.default = {
    postgres_host: POSTGRES_HOST,
    postgres_db: POSTGRES_DB,
    postgres_user: POSTGRES_USER,
    postgres_password: POSTGRES_PASSWORD,
    pepper: BCRYT_PASSWORD,
    salt: SALT_ROUNDS,
    port: PORT
};
