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
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
describe('test product handlers endpoints', () => {
    it('Testing the index endpoint with valid token', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/products').expect(200);
    })),
        it('testing the show endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request.get('/product/2').expect(200);
        })),
        it('testing the create endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
            yield request.post('/create_product').send({
                "name": "meat",
                "price": 180,
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjo2LCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZCI6IiQyYiQxMCQ1bDkvQ1ZaQkVnLnlyQ3laLlJKUm8uNGsyN01kb2wvb2RWZzkyMVh4bEp6UHpOZlUwVktUeSJ9XSwiaWF0IjoxNjczMjgwMTkxfQ.sjMU4BZ3ZrYjYWXzi8VOe_CqrcsVlT03DUQb7pS6Mms"
            }).expect(200);
        }));
});
