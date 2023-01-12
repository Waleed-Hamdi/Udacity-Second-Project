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
const productModel_1 = require("../models/productModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.TOKEN_SECRET;
const store = new productModel_1.productmodel();
const productroute = (app) => {
    app.get('/products', index);
    app.get('/product/:id', show);
    app.post('/create_product', create);
};
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield store.index();
    res.status(200).json(result);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const result = yield store.show(id);
    res.status(200).json(result);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (jsonwebtoken_1.default.verify(req.body.token, secret)) {
            const produc = {
                id: 0,
                name: req.body.name,
                price: req.body.price
            };
            const id = parseInt(req.body.id);
            const result = yield store.create(produc);
            res.status(200).json(result);
        }
    }
    catch (err) {
        res.json('sorry you are not authenticated');
    }
});
exports.default = productroute;
