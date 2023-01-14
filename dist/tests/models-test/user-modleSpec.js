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
const userModel_1 = require("../../models/userModel");
const store = new userModel_1.usermodel();
const us = {
    id: 0,
    firstName: "waleed",
    lastName: "hamdi",
    password: "waleedhamdi19598"
};
describe('Test user modle  methods', () => {
    it('test create method', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield store.create(us);
        expect(response).not.toBeNull();
    })),
        it('test index method', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield store.index();
            expect(response).not.toBeNull();
        })),
        it('test create method', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield store.show(1);
            expect(response).not.toBeNull();
        }));
});
