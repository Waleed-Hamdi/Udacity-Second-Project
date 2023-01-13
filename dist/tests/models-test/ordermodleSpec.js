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
const orderModel_1 = require("../../models/orderModel");
const store = new orderModel_1.ordermodel();
const ord = {
    id: 0,
    // product_id: 1,
    // quantity: 5,
    user_id: 1,
    order_status: "active"
};
describe('Test orders modle  methods', () => {
    it('test create order method', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield store.create(ord);
        expect(response).not.toBe([]);
    })),
        it('test show order method', () => __awaiter(void 0, void 0, void 0, function* () {
            yield store.create(ord);
            const response = yield store.show(5);
            expect(response).not.toBeNull();
        }));
});
