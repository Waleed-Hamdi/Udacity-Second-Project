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
const productModel_1 = require("../../models/productModel");
const userModel_1 = require("../../models/userModel");
const orderModel_1 = require("../../models/orderModel");
const us = {
    id: 0,
    firstName: "wleed hamdi",
    lastName: "hassan",
    password: "0000000"
};
const usmod = new userModel_1.usermodel();
const ord = {
    id: 0,
    // product_id: 1,
    // quantity: 5,
    user_id: 1,
    order_status: "active"
};
const ordmod = new orderModel_1.ordermodel();
const store = new productModel_1.productmodel();
const prod = {
    id: 0,
    name: "slamon",
    price: 50
};
const prod2 = {
    id: 0,
    name: "fishchecken",
    price: 200
};
describe('Test products modle  methods', () => {
    it('test create method', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield store.create(prod);
        expect(response).not.toBeNull();
    })),
        it('test index method', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield store.index();
            expect(response).not.toBe([]);
        })),
        it('test create method', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield store.show(1);
            expect(response).not.toBeNull();
        }));
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield store.create(prod2);
        const res2 = yield usmod.create(us);
    }));
});
