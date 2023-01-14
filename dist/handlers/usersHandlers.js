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
const userModel_1 = require("../models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const store = new userModel_1.usermodel();
dotenv_1.default.config();
const secret = process.env.TOKEN_SECRET;
const userRoutr = (app) => {
    app.get('/users', index);
    app.post('/user/create', create);
    app.get('/user/show/:id', show);
};
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (jsonwebtoken_1.default.verify(req.body.token, secret)) {
            const result = yield store.index();
            res.status(200).json(result);
        }
    }
    catch (err) {
        res.status(401);
        res.json('sorry you are not authorized');
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u = {
        id: 0,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    };
    const result = yield store.create(u);
    const token = jsonwebtoken_1.default.sign({ result }, secret);
    res.status(200).json(token);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        if (jsonwebtoken_1.default.verify(req.body.token, secret)) {
            const result = yield store.show(id);
            res.json(result);
        }
    }
    catch (err) {
        res.status(401);
        res.json('you are not authorized');
    }
});
exports.default = userRoutr;
