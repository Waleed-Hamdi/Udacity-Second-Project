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
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const orderModel_1 = require("../models/orderModel");
dotenv_1.default.config();
const secret = process.env.TOKEN_SECRET;
const store = new orderModel_1.ordermodel();
const orderroute = (app) => {
    app.get('/order/:id', show);
    app.post('/order', create);
};
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (jsonwebtoken_1.default.verify(req.body.token, secret)) {
            const id = parseInt(req.params.id);
            const result = yield store.show(id);
            res.json(result);
        }
    }
    catch (err) {
        res.json('you have to be sure you pass token and order id  to me in request body ');
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (jsonwebtoken_1.default.verify(req.body.token, secret)) {
            const ord = {
                id: 0,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
                user_id: req.body.user_id,
                order_status: req.body.order_status
            };
            const result = yield store.create(ord);
            res.status(200).json(result);
        }
    }
    catch (err) {
        res.json('sorry you are not authorized');
    }
});
exports.default = orderroute;
