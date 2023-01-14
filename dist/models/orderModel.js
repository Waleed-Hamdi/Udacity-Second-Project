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
exports.ordermodel = void 0;
const database_1 = __importDefault(require("../database"));
class ordermodel {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'select order_id,user_id ,product_id ,quantity,order_status from order_products INNER JOIN orders on orders.id=order_products.order_id';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error('it is Error on getting specific order');
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'select order_id,user_id ,product_id ,quantity,order_status from order_products INNER JOIN orders on orders.id=order_products.order_id where user_id=($1)';
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error('it is Error on getting specific order');
            }
        });
    }
    create(ord) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'insert into orders (user_id,order_status) values ($1,$2) returning *';
                const result = yield conn.query(sql, [ord.user_id, ord.order_status]);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error('it is Error in creating this order');
            }
        });
    }
    addProduct(quantity, orderId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1, $2, $3) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [quantity, orderId, productId]);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (err) {
                throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`);
            }
        });
    }
}
exports.ordermodel = ordermodel;
